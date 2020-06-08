const express = require('express');
const router = new express.Router(); 
const User = require('../models/user')


router.post('/registration', (req, res) => {
    console.log("before saving in db" + req)
    const user = new User(req.body);

    user.save().then(() => {
        // console.log("after saving in db" + user)
        res.send(user)
    }).catch(err => {
        res.status(400).send(err)
    })

})


router.get('/users', (req, res) => {

    User.find({}).then((user) => {
        res.send(user)
    }).catch(err => {
        res.send(500).send(err)
    })
});

router.get('/users/:id', (req, res) => {

    const id = req.params.id;

    User.findById(id).then((user) => {
        res.send(user)
    }).catch(err => {
        res.send(500).send(err)
    })

})


router.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).then((user) => {
        res.send(user)
    }).catch(err => {
        res.send(500).send(err)
    })
});

router.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id).then((user) => {
        res.send(user)
    }).catch(err => {
        res.send(500).send(err)
    })
});
module.exports = router