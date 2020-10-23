let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Contact Model
let Contact = require('../models/contact');

/* GET Route for displaying the Contact List page - READ Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           res.render('contact/list', {title: 'Business Contacts', ContactList: contactList});
        }
    });
});
/* GET Route for displaying the "Update Contact List" page - UPDATE Operation */
router.get('/update/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToUpdate) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contact/update', {title: 'Update Contact', contact: contactToUpdate});
        }
    });
});

/* POST Route for processing the "Update Contact List" page - UPDATE Operation */
router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email

    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    })
});

/* GET to perform deletion - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
});
module.exports = router;