const Socials = require('../models/socials.model');
const axios = require('axios').default;
require('dotenv').config();

//import the authentication for all the social media

// GitHub
exports.getGithub = async (req, res) => {
  const endpoint = 'https://api.github.com/users/FrancescoXX';
  try {
    const response = await axios.get(endpoint);
    const followersData = response.data.followers;

    //store the followers count on the db
    const social = await Socials.create({
      socialName: 'github',
      followers: followersData,
    });
    return res.status(201).json(social);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

// Twitter
exports.getTwitter = async (req, res) => {
  try {
    let data = '';
    const TWITTER_ID = 1704118916 //user your twitter id https://tweeterid.com/

    const config = {
      method: 'get',
      url: `https://api.twitter.com/1.1/users/show.json?user_id=${TWITTER_ID}`,
      headers: {
        Authorization: 'Bearer '+ process.env.TWITTER_API_TOKEN,
        Cookie:
          'guest_id=v1%3A163681632986041456; guest_id_ads=v1%3A163681632986041456; guest_id_marketing=v1%3A163681632986041456; personalization_id="v1_Hn8d76dlArEWlGgvmBl6Kg=="',
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(JSON.stringify(response.data));
        
        const followersData = response.data.followers_count;

        const social = await Socials.create({
          //store the followers count on the db
          socialName: 'twitter',
          followers: followersData,
        });

        return res.status(200).json(response.data.followers_count);

      })
      .catch(function (error) {
        console.log(error);
        return res.status(500).json(error);
      });
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Twitch
exports.getTwitch = async (req, res) => {
  try {
    res.status(200).json('getTwitch');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Youtube
exports.getYoutube = async (req, res) => {
  try {
    res.status(200).json('getYouTube');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Instagram
exports.getInstagram = async (req, res) => {
  try {
    res.status(200).json('getInstagram');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Linkedin
exports.getLinkedin = async (req, res) => {
  try {
    res.status(200).json('getLinkedin');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
