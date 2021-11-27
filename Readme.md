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

run db
```
docker compose up -d db
```

run grafana
```
docker compose up -d grafana
```

build and run nodeapp
```
docker compose up --build nodeapp
```

```
visit http://localhost:3000/
```

log with admin/admin

- import Grafana dashboard from json
- set Postgres as datasource for Grafana dashboard (see Grafana datasources)
- set Grafana dashboard as default dashboard
```

```

# Important:
add a .env file in the root folder with the following content, copying the content of the .env.example:
```
TWITTER_API_TOKEN=<your twitter api token>
YOUTUBE_API_TOKEN=<your youtube api token>
TWITCH_API_TOKEN=<your twitch api token>
TWITCH_CLIENT_ID=<your twitch client id>
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

### Node app

runs on port 8080

```
docker compose up -d nodeapp
```
