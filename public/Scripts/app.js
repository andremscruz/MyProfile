/*Andre Mariano Sousa Cruz - 301097077 - 10/09/2020 */
(function(){

    function Start()
    {
        console.log("App Started...");


        let deleteButtons = document.querySelectorAll('.btn-outline-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();