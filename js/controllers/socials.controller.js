const Socials = require('../models/socials.model');
const axios = require('axios').default;
require('dotenv').config();

//import the authentication for all the social media

// GitHub
exports.getGithub = async (req, res) => {
  const endpoint = `https://api.github.com/users/${process.env.GITHUB_USERNAME}`;
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
    const config = {
      method: 'get',
      url: `https://api.twitter.com/1.1/users/show.json?screen_name=${process.env.TWITTER_USERNAME}`,
      headers: {
        Authorization: 'Bearer ' + process.env.TWITTER_API_TOKEN,
        Cookie:
          'guest_id=v1%3A163681632986041456; guest_id_ads=v1%3A163681632986041456; guest_id_marketing=v1%3A163681632986041456; personalization_id="v1_Hn8d76dlArEWlGgvmBl6Kg=="',
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const followersData = response.data.followers_count;

        //store the Twitter followers count on the db
        await Socials.create({
          socialName: 'twitter',
          followers: followersData,
        });

        return res.status(201).json(followersData);
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
// https://api.twitch.tv/kraken/channels/44322889/follows?client_id=<your client id>&api_version=5
exports.getTwitch = async (req, res) => {
  try {
    let data = '';

    const config = {
      method: 'get',
      url: `https://api.twitch.tv/kraken/channels/44322889/follows?client_id=<your client id>&api_version=5`,
      headers: {
        Authorization: 'Bearer ' + process.env.TWITCH_API_TOKEN,
        // Cookie:
          // 'guest_id=v1%3A163681632986041456; guest_id_ads=v1%3A163681632986041456; guest_id_marketing=v1%3A163681632986041456; personalization_id="v1_Hn8d76dlArEWlGgvmBl6Kg=="',
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const followersData = response.data.followers_count;

        //store the Twitter followers count on the db
        await Socials.create({
          socialName: 'twitch',
          followers: followersData,
        });

        return res.status(200).json(followersData);
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
