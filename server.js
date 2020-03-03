'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {handleJoke} = require("./handlers")


const PORT = process.env.PORT || 8000;


express()
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	.use(morgan('dev'))
	.use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({extended: false}))
    .set('view engine', 'ejs')


    //we need an event listener the submit reload the page to the end point and we dont want to refresh the page


   


    // endpoints
    .post("/jokes", handleJoke) //cant be the same as static file
    


    .listen(PORT, () => console.log(`Listening on port ${PORT}`));


