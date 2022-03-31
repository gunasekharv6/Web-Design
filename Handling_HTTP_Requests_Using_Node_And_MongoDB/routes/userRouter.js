const express = require('express');
const router = express.Router();
const setupUser = require("../model/setupUser");
const userservice = require('../service/userslogin');
const users = require('../model/beanClasses/users');
// const userService = require('../service/userslogin');

router.get("/setup", (req, res, next) => {
    setupUser.userSetup().then((data) => {
        res.send(data)
    }).catch(err => res.status(err.status).send(err.message));
});


//router to create
router.post('/create', (req, res, next) => {
    let userObj = new users(req.body)
    console.log(userObj);

    userservice.create(userObj).then(() => {
        res.json({ message: "User created successfully!" });
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});

router.post('/edit', (req, res, next) => {
    // let currentEmail = req.body.currentEmail;
    // let currentPassword = req.body.currentPassword;
    // let newEmail = req.body.newEmail;
    // let newPassword = req.body.newPassword;

    let data = req.body;
    // console.log(data);
    // console.log("router", data)
    userservice.editUser(data).then((msg) => {
        // res.send("HI");
        res.json({ message: msg });
        // res.status(err.status).send(err.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
        // res.send("HI2");
        // next(err)
    });
});

router.delete('/delete', (req, res, next) => {
    // let emailDelete = req.body.emailId;
    // let passwordDelete = req.body.password;
    let userObj = new users(req.body)

    userservice.deleteUser(userObj).then(msg => {
        res.json({ message: msg });
    }).catch(err => {
        res.status(err.status).send(err.message);
        // next(err)
        // res.send(err)
    });
});

router.get('/getAll', (req, res, next) => {
    userservice.getUsers().then(data => {
        res.json(data);
    }).catch(err => {
        // next(err)
        // console.dir(err);
        // res.json(err);
        res.status(err.status).send(err.message);
    });
});


router.post('*', (req, res, next) => {
    let data = req.body;
    res.send("Please send a valid request");
    // userService.editUser(data).then((msg) => {
    //     // res.send("HI");
    //     res.json({ message: msg });
    // }).catch(err => {
    //     res.status(err.status).send(err.message);
    //     // res.send("HI2");
    //     // next(err)
    // });
});


module.exports = router;

