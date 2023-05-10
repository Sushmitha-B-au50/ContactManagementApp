const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
require('../../db');
const Contact = require('../Models/contact.js');
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', async (req, res, next) => {  //to get all contacts
    try {
        const result = await Contact.find();
        res.send(result);
    }
    catch {
        res.send('Error' + err);
    }
});


router.post('/addContact', async (req, res, next) => {   // to add the contact   
    try {
       const result =req.body;
        const contact = new Contact({
            ContactID: result.ContactID,
            FirstName: result.FirstName,
            LastName: result.LastName,
            Status: result.Status,
        });
        const dataRes = await contact.save();
        return res.status(200).json({
            mesaage: "contact added succesfully" 
        })
    }
    catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
});



router.put('/:id', async (req, res, next) => {  //to update contact
    try
    {
        const contactToUpdate = await Contact.findOneAndUpdate({ "ContactID": req.params.id })
        if (!contactToUpdate) {
            return res.status(404).json({
                mesaage: "contact not found" 
            })
        }
        contactToUpdate.ContactID = req.params.id,
        contactToUpdate.FirstName = req.body.FirstName,
        contactToUpdate.LastName = req.body.LastName,
        contactToUpdate.Status = req.body.Status

        const dataRes = await contactToUpdate.save();
            return res.status(200).json({
                mesaage: "contact updated succesfully" 
            })
    }
     catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
    

});

router.delete('/:id', async (req, res, next) => {   // to delete the contact
    await Contact.deleteOne({ "ContactID": req.params.id }).then(result => {
        return res.send("contact deleted successfully ");
    })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


router.get('/:id', async (req, res, next) => {   //getbyID
    try {
        const result = await Contact.find({ "ContactID": req.params.ContactID });
        res.send(result);
    }
    catch {
        res.send('Error' + err);
    }
});



module.exports = router;