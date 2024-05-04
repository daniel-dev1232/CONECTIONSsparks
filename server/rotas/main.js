const express = require("express");
const router = express.Router();
//const Post = require("../models/post");

router.get('', (req, res) => {
    try {
        res.render('index');
        console.log("[ * ] acessou home");
    } catch (error) {
        console.log(error);
    }
    
});

router.get("/registro", (req, res) => {
    res.render("registro");
    console.log("[ * ] acessou criação de perfil")
});

module.exports = router;