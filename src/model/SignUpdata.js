const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
    fname : String,
    lname : String,
    email : String,
    password : String,
    dob : String,
    gender : String,
    address1 : String,
    address2 : String,
    city : String,
    state : String,
    zip : String,
    number : String
})
var SignUpdata = mongoose.model('signupdata',SignUpSchema);

module.exports = SignUpdata;
