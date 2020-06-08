const mongoose = require('mongoose');
const Register = mongoose.model('Register', {
    mobileNumber : {
        type: String
    },
    userName: {
        type: String
    },
    imagePreviewUrl: {
        type: Buffer
    }
})

module.exports = Register