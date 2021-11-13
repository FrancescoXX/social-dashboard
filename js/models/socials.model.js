const Sequelize = require('sequelize');
const db = require('../util/database');

const Socials  = db.define('socials',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  socialName:{
    type: Sequelize.STRING,   
  },
  followers:{
    type: Sequelize.INTEGER
  }
})

module.exports = Socials