const express = require('express');
const client = require('cheerio-httpcli');

const router = express.Router();

router.get('/', (req, res, next) => {

    const url = 'http://rival6821.xyz/';
    let param = {};
    let data = {
        title : '',
        name : '',
        description : '',
    }
    client.fetch(url, param, function (err, $, res, body) {
        if (err) {
            console.log("Error:", err);
            return;
        }
        console.log(res.headers);
        $('a').each(function () {
            console.log($(this).attr('href'));
        });
    });

    
});

module.exports = router;