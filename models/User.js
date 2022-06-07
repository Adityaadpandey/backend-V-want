const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: 'string',
        required: true,
        unique: true
    },
    img: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required : true,
        unique : true,
    },
    password:{
        type: 'string',
        required : true,
    },
    resetToken:{
    type: 'string',
        default: null
    },
    expireToken: {
        type: Date,
        default: null
    },
    date:{
        type: Date,
        default: Date.now,
    }

})
const User = mongoose.model('User',UserSchema);
module.exports = User;