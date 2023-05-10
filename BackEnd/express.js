const bodyParser = require('body-parser');
 const contactRoutes = require('./RestAPI/Routes/contacts');
const express =  require ('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/contacts',contactRoutes);





app.listen(8000, () => {
    console.log("Listening on the port 8000");
})