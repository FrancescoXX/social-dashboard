//express hello world
const express = require('express');
const axios = require('axios').default;
const Socials = require('./models/socials');
const sequelize = require('./util/database')

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ghtest', async function (req, res) {
  console.log('ghtest');
  const endpoint = 'https://api.github.com/users/FrancescoXX';
  try {
    const response = await axios.get(endpoint);
    const followers = response.data.followers;
    res.json(followers);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

sequelize.sync({force: false})
  .then(() => app.listen(process.env.EXTERNALPORT))
  .catch((error) => console.log(error))

