const Socials = require('../models/socials.model');
const axios = require('axios').default;
const cron = require('node-cron');

// GitHub
exports.getGithub = async (req, res) => {
  const endpoint = `https://api.github.com/users/${process.env.GITHUB_USERNAME}`;
  try {
    const response = await axios.get(endpoint);

    //store the GitHub followers count on the db
    const followersData = response.data.followers;
    const social = await Socials.create({
      socialName: 'github',
      followers: followersData,
    });

    cron.schedule('* * * * *', () => {
      console.log('updating GitHub followers every minute');
      getGitHubUpdate();
    });

    return res.status(201).json(social);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

// GitHub Update
const getGitHubUpdate = async () => {
  console.log('github update');
  try {
    let data = '';
    const config = {
      method: 'get',
      url: `https://api.github.com/users/${process.env.GITHUB_USERNAME}`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(async function (response) {
        //update the GitHub followers count on the db
        const followersData = response.data.followers;
        await updateSocialService(followersData, 'github');
      })
      .catch(function (error) {
        console.log(error);
        console.log('GitHub followers update failed', error);
      });
  } catch (error) {
    console.log(error);
    console.log('Twitter followers update failed 2', error);
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

        cron.schedule('* * * * *', () => {
          console.log('updating Twitter followers every minute');
          getTwitterUpdate();
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

// Twitter Update
const getTwitterUpdate = async () => {
  console.log('twitter update');
  try {
    let data = '';
    const config = {
      method: 'get',
      url: `https://api.twitter.com/1.1/users/show.json?screen_name=${process.env.TWITTER_USERNAME}`,
      headers: {
        Authorization: 'Bearer ' + process.env.TWITTER_API_TOKEN,
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        //update the Twitter followers count on the db
        const followersData = response.data.followers_count;
        await updateSocialService(followersData, 'twitter');
      })
      .catch(function (error) {
        console.log(error);
        console.log('Twitter followers update failed', error);
      });
  } catch (error) {
    console.log(error);
    console.log('Twitter followers update failed 2', error);
  }
};

// Twitch
exports.getTwitch = async (req, res) => {
  // CURL TO GET YOUR TWITCH TOKEN
  // curl --location --request POST 'https://id.twitch.tv/oauth2/token?client_id=XXXXXXXXX&client_secret=XXXXXXXXX&grant_type=client_credentials'

  try {
    let data = '';
    const config = {
      method: 'get',
      url: `https://api.twitch.tv/helix/users/follows?to_id=${process.env.TWITCH_USER_ID}`,
      headers: {
        Authorization: 'Bearer ' + process.env.TWITCH_API_TOKEN,
        'Client-Id': process.env.TWITCH_CLIENT_ID,
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const responseData = response.data;

        // store the Twitch followers count on the db
        const followersData = response.data.total;
        await Socials.create({
          socialName: 'twitch',
          followers: followersData,
        });

        cron.schedule('* * * * *', () => {
          console.log('updating Twitch followers every minute');
          getTwitchUpdate();
        });

        return res.status(200).json(responseData);
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

const getTwitchUpdate = async () => {
  console.log('twitch update');
  try {
    let data = '';
    const config = {
      method: 'get',
      url: `https://api.twitch.tv/helix/users/follows?to_id=${process.env.TWITCH_USER_ID}`,
      headers: {
        Authorization: 'Bearer ' + process.env.TWITCH_API_TOKEN,
        'Client-Id': process.env.TWITCH_CLIENT_ID,
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        // store the Twitch followers count on the db
        const followersData = response.data.total;
        await updateSocialService(followersData, 'twitch');
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

// Youtube
exports.getYoutube = async (req, res) => {
  try {
    let data = '';

    const config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_TOKEN}`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const responseData = response.data.items[0];

        const followersData = responseData.statistics.subscriberCount;

        //store the YouTube subscribers count on the db
        await Socials.create({
          socialName: 'youtube',
          followers: followersData,
        });

        // Cron update Youtube subscribers every minute
        cron.schedule('* * * * *', () => {
          console.log('updating YouTube subscribers every minute');
          getYoutubeUpdate();
        });

        return res.status(200).json(responseData);
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

const getYoutubeUpdate = async () => {
  console.log('youtube update');
  try {
    let data = '';

    const config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_TOKEN}`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const responseData = response.data.items[0];
        const followersData = responseData.statistics.subscriberCount;

        //Update the YouTube subscribers count on the db
        await updateSocialService(followersData, 'youtube');
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

// Hashnode
exports.getHashnode = async (req, res) => {
  try {
    const user = process.env.HASHNODE_USERNAME;
    let data = JSON.stringify({
      query: `query GetFollowers($user: String!) {user(username: $user) {numFollowers}}`,
      variables: {
        user,
      },
    });

    const config = {
      method: 'POST',
      url: 'https://api.hashnode.com/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        //store the Hashnode followers count on the db
        const followersData = response.data.data.user.numFollowers;
        await Socials.create({
          socialName: 'hashnode',
          followers: followersData,
        });

        cron.schedule('* * * * *', () => {
          console.log('updating Hashnode followers every minute');
          getHashnodeUpdate();
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

const getHashnodeUpdate = async () => {
  console.log('hashnode update');
  try {
    const user = process.env.HASHNODE_USERNAME;
    let data = JSON.stringify({
      query: `query GetFollowers($user: String!) {user(username: $user) {numFollowers}}`,
      variables: {
        user,
      },
    });

    const config = {
      method: 'POST',
      url: 'https://api.hashnode.com/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        //store the Hashnode followers count on the db
        const followersData = response.data.data.user.numFollowers;

        //Update the Hashnode followers count on the db
        await updateSocialService(followersData, 'hashnode');

      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

// Instagram
exports.getInstagram = async (req, res) => {
  try {
    let data = '';

    const config = {
      method: 'get',
      url: `https://www.instagram.com/${process.env.INSTAGRAM_USERNAME}/?__a=1`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const responseData = response.data;

        const followersData = responseData.graphql.user.edge_followed_by.count;
        //store the Instagram followers count on the db
        await Socials.create({
          socialName: 'instagram',
          followers: followersData,
        });

        cron.schedule('* * * * *', () => {
          console.log('updating Instagram followers every minute');
          getInstagramUpdate();
        });

        return res.status(201).json(responseData);
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

const getInstagramUpdate = async () => {
  console.log('instagram update');
  try {
    let data = '';

    const config = {
      method: 'get',
      url: `https://www.instagram.com/${process.env.INSTAGRAM_USERNAME}/?__a=1`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(async function (response) {
        const responseData = response.data;

        const followersData = responseData.graphql.user.edge_followed_by.count;
        //Update the Instagram followers count on the db
        await updateSocialService(followersData, 'instagram');

      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

async function updateSocialService(followersData, social) {
  console.log('updating social service');
  await Socials.update(
    {
      socialName: social,
      followers: followersData,
    },
    { where: { socialName: social } }
  );
  console.log(social, ' followers updated');
}
