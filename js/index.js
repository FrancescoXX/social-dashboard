const express = require('express');
const Socials = require('./models/socials.model');
const sequelize = require('./util/database');

const app = express();

app.get('/', function (req, res) {
  res.send('Social Dashboard');
});

// Dev endpoints
app.use('/dev', require('./routes/dev.routes'));

//Official one
app.use('/socials', require('./routes/socials.routes'));


sequelize
  .sync({ force: true })
  .then(() => app.listen(process.env.EXTERNALPORT))
  .catch((error) => console.log(error));
