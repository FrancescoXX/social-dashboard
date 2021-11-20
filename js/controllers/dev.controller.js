const Socials = require('../models/socials.model');
const axios = require('axios').default;
// const sequelize = require('../util/database')
require('dotenv').config();

//Socials Controller
exports.test = async (req, res) => {
  console.log("test");
  try {
    console.log(process.env);
    res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// GitHub
exports.getGithub = async (req, res) => {
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
}

// Twitter
exports.getTwitter = async (req, res) => {
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
}

// Twitch
exports.getTwitch = async (req, res) => {
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
}

// Youtube
exports.getYoutube = async (req, res) => {
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
}

// Instagram
exports.getInstagram = async (req, res) => {
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
}

// Linkedin
exports.getLinkedin = async (req, res) => {
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
}