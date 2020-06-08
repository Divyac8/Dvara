const mongoose = require('mongoose');

const User = mongoose.model('User', {
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    email : {
        type: String
    },
    mobileNumber : {
        type: String
    },
    age : {
        type: Number
    }
})

module.exports = User