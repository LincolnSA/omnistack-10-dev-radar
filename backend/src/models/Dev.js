const mongoose = require('mongoose');
const PointSchema = require("./utils/PointSchema");

//criando um novo esquema que sera salvo no db
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

//Exportando o modelo DevSchema com o nome Dev
module.exports = mongoose.model('Dev', DevSchema);