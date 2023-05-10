const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


//contact collection 
const contactSchema  = new mongoose.Schema(
    {
        ContactID : Number,
        FirstName: String,
        LastName:String,
        Status:Boolean
    }
)

const Contacts = new mongoose.model("Contacts",contactSchema);

module.exports = Contacts;
