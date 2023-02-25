import mongoose from 'mongoose';

/*
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    active: Boolean
})

const User = mongoose.model('User', userSchema);

export default User 
*/

const userSchema = new mongoose.Schema({
    employeeID: Number,
    passord:    String,
    firstName:  String,
    lastName:   String,
    age:        Number
})

const User = mongoose.model('User', userSchema);

export default User 