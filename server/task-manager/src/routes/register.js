const express = require('express');
const router = new express.Router(); 
const Register = require('../models/Register')
const multer = require('multer')

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})

// router.post('/upload', upload.single('upload'), async (req, res) => {
//     console.log("before saving in db" + req)    
//    req.Register.file = req.file.buffer
//    await req.Register.save()
//    res.send()
// },(error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

router.post('/register', (req, res) => {
    console.log("before saving in db" + req)
    const userData = new Register(req.body);

    userData.save().then(() => {
        // console.log("after saving in db" + user)
        res.send(userData)
    }).catch(err => {
        res.status(400).send(err)
    })

})

router.get('/getUsers', (req, res) => {

    Register.find({}).then((user) => {
        res.send(user)
    }).catch(err => {
        res.send(500).send(err)
    })
});

module.exports = router