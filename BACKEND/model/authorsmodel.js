var mongo = require('mongoose');

var schema = mongo.Schema;

var authorSchema = new schema({
    authorTitle : String,
    book : String,
    genre : String,
    description : String,
    urlToImage : String
});

var authorsModel = mongo.model("authors", authorSchema);

module.exports = authorsModel;