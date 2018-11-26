var express = require('express');
var router = express.Router();

const MongoClient    = require('mongodb').MongoClient;
const url = "mongodb+srv://user:user@cluster0-fyldf.mongodb.net/test?retryWrites=true";

router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, client) {
        const collection = client.db("test").collection("test");

        if (err) {
            return console.log(err);
        }

        collection.find({}).toArray(function (err, cats) {
            res.render('index', {title: 'List cats', cats: cats});
        });

        client.close();
    });
});
module.exports = router;
