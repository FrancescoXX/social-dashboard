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
  const endpoint = 'https://api.github.com/users/fbertone';
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: "github",
      followers: followersData
    })
    return res.status(201).json(social);

  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Twitter
app.get('/twittertest', async function (req, res) {
  const endpoint = 'https://api.github.com/users/Francescoxx'; //Mocking with gh api
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: "twitter",
      followers: followersData
    })
    return res.status(201).json(social);

  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Twitch
app.get('/twitchtest', async function (req, res) {
  const endpoint = 'https://api.github.com/users/nimrodkra'; //Mocking with gh api
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: "twitch",
      followers: followersData
    })
    return res.status(201).json(social);

  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Youtube
app.get('/youtubetest', async function (req, res) {
  const endpoint = 'https://api.github.com/users/inhuofficial'; //Mocking with gh api
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: "youtube",
      followers: followersData
    })
    return res.status(201).json(social);

  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Instagram
app.get('/instagramtest', async function (req, res) {
  const endpoint = 'https://api.github.com/users/suhailkakar'; //Mocking with gh api
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: "instagram",
      followers: followersData
    })
    return res.status(201).json(social);

  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Linkedin
app.get('/linkedintest', async function (req, res) {
  const endpoint = 'https://api.github.com/users/TheJackForge'; //Mocking with gh api
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: "linkedin",
      followers: followersData
    })
    return res.status(201).json(social);

  } catch (error) {
    console.error(error);
    res.send(error);
  }
});


sequelize.sync({force: false})
  .then(() => app.listen(process.env.EXTERNALPORT))
  .catch((error) => console.log(error))