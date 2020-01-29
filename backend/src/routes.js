const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/devs', DevController.devs);
routes.get('/repos', DevController.repos);
routes.post('/devs', DevController.store);

module.exports = routes;