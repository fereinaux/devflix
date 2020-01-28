const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://reinaux:reinaux09@cluster0-b1ikh.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(express.json())
server.use(routes);

server.listen(3333);

