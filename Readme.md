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
