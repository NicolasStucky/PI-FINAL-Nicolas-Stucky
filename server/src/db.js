require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel=require("./models/Country")
const ActivityModel=require("./models/Activity")
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
CountryModel(sequelize)
ActivityModel(sequelize)

const { Country, Activity } = sequelize.models;
// Aca vendrian las relaciones
Country.belongsToMany(Activity, {
  through: "CountryActivity",
});
Activity.belongsToMany(Country, {
  through: "CountryActivity",
})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};