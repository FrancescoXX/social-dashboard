const Socials = require('../models/socials.model');
const axios = require('axios').default;

//import the authentication for all the social media

// GitHub
exports.getGithub = async (req, res) => {
  const endpoint = 'https://api.github.com/users/FrancescoXX'; 
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
  try {
    res.status(200).json("getTwitter");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// Twitch
exports.getTwitch = async (req, res) => {
  try {
    res.status(200).json("getTwitch");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// Youtube
exports.getYoutube = async (req, res) => {
  try {
    res.status(200).json("getYouTube");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// Instagram
exports.getInstagram = async (req, res) => {
  try {
    res.status(200).json("getInstagram");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// Linkedin
exports.getLinkedin = async (req, res) => {
  try {
    res.status(200).json("getLinkedin");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

