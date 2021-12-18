# Social Dashboard

A tool to visualize your Social Media Stats

# TWITCH LIVESTREAM:

https://www.twitch.tv/francesco_ciulla

# Social Media integrated:

- ✅ GitHub
- ✅ Twitter
- ✅ Hashnode
- ✅ Instagram
- ✅ YouTube
- ✅ Twitch


# Procedure:
clone the project from GitHub:
```
git clone https://github.com/FrancescoXX/social-dashboard.git 
```

Step into the directory
```
cd social-dashboard
```

Open with any editor:
```
code .

```

# Important:
add a .env file in the root folder with the following content, copying the content of the .env.example:
```
TWITTER_API_TOKEN=your-twitter-api-token
YOUTUBE_API_TOKEN=your-youtube-api-token
TWITCH_API_TOKEN=your-twitch-api-token
TWITCH_CLIENT_ID=your-twitch-client-id
```

run db
```
docker compose up -d db
```

To test if the db is up and running:
```
docker exec -it db psql -U postgres
```



run grafana
```
docker compose up -d grafana
```

Visit localhost:3000 for grafana web interface

Use admin/admin for login


Add Datasource Postgres for Grafana:
- Postgres: Host: db, Port: 5432, Database: postgres, User: postgres, Password: postgres, SSLmode: disable
- set Postgres as datasource for Grafana dashboard (see Grafana datasources)
- import Grafana dashboard from json
- set Grafana dashboard as default dashboard

build and run nodeapp
```
docker compose up --build nodeapp
```



# Social Dashboard

I am livestreaming this project on Twitch: https://www.twitch.tv/francesco_ciulla

Clone the projects
```
git clone https://github.com/FrancescoXX/social-dashboard
```

### Grafana

A Dashboard to display your social media stats

To deploy it
```
docker compose up -d grafana
```

visit localhost:3000

### Postgres

runs on port 5432

```
docker compose up -d db
```

## Node app

runs on port 8080

```
docker compose up -d nodeapp
```

### GitHub

To setup GitHub, add your GitHub Handler in the docker-compose.yml file
```
GITHUB_USERNAME=your-github-username
```

Run your node app
```
docker-compose up --build nodeapp
```

to make it work, hit the following url:
```
http://localhost:8080/socials/github
```

### Hashnode

To setup Hashnode, add your Hashnode Handler in the docker-compose.yml file
``` 
HASHNODE_USERNAME=your-hashnode-username
```

Run your node app
```
docker-compose up --build nodeapp
```

to make it work, hit the following url:
```
http://localhost:8080/socials/hashnode
```

### Instagram

To setup Instagram, add your Instagram Handler in the docker-compose.yml file

```
INSTAGRAM_USERNAME=your-instagram-username
```

Run your node app
```
docker-compose up --build nodeapp
```

to make it work, hit the following url:
```
http://localhost:8080/socials/instagram
```

### Twitter:

**Note: to make it work, use your Twitter API**

https://developer.twitter.com/

Note that once you have the Twitter API, you can use any account you want to test the social dashboard.

Add the TWITTER_API_TOKEN in the .env file

To setup Twitter, add your Twitter Handler in the docker-compose.yml file

```
TWITTER_USERNAME=your-twitter-username
```

Run your node app
```
docker-compose up --build nodeapp
```

to make it work, hit the following url:
```
http://localhost:8080/socials/twitter
```

### YouTube

**Note: to make it work, use your YouTube API**

https://developers.google.com/youtube/v3/getting-started

Note that once you have the YouTube API, you can use any account you want to test the social dashboard.

Add the YOUTUBE_API_TOKEN in the .env file

To setup YouTube, add your YOUTUBE_CHANNEL_ID in the docker-compose.yml file

```
YOUTUBE_USERNAME=your-youtube-username
```

Run your node app
```
docker-compose up --build nodeapp
```

to make it work, hit the following url:
```
http://localhost:8080/socials/youtube
```

### Twitch

**Note: to make it work, use your Twitch API**

https://dev.twitch.tv/docs/api/

Note that once you have the Twitch API, you can use any account you want to test the social dashboard.

Add the TWITCH_API_TOKEN and TWITCH_CLIENT_ID in the .env file

To setup Twitch, add your TWITCH_USER_ID in the docker-compose.yml file

```
YOUTUBE_USERNAME=your-twitch-username
```

Run your node app
```
docker-compose up --build nodeapp
```

to make it work, hit the following url:
```
http://localhost:8080/socials/twitch
```
