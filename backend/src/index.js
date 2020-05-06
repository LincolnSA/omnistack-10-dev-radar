require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');
const app = express();
const server = http.Server(app);

setupWebsocket(server);

//Conexão com o mongo db atlas
const USER_DB = process.env.USER_DB;
const SECRET_DB = process.env.SECRET_DB;

mongoose.connect(`mongodb+srv://${USER_DB}:${SECRET_DB}@cluster0-m0xod.mongodb.net/week10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333, () => console.log(`Servidor ON http://localhost:3333`));
