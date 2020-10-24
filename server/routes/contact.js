let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let contactController = require('../controllers/contact');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for displaying the Contact List page - READ Operation */
router.get('/', requireAuth, contactController.displayContactList);

/* GET Route for displaying the "Update Contact List" page - UPDATE Operation */
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

/* POST Route for processing the "Update Contact List" page - UPDATE Operation */
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/* GET to perform deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;