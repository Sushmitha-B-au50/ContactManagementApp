const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://admin:admin123@contactapp.gpjn9jb.mongodb.net/ContactApp?retryWrites=true&w=majority", 
    (err) => {
        if(err){
            console.log("Connection Failed", err)
        }
        else{
            console.log("Connection Success");
        }
    }
)