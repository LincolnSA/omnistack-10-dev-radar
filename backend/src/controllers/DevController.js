const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    //metodo para listar todos os devs
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    //metodo de salvar no db
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        //busca um unico dev 
        let dev = await Dev.findOne({ github_username });

        //verifica se o dev ja foi cadastrado
        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return res.json(dev);
    }
};