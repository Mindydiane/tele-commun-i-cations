const { User } = require("../models");

const userData = [
  {
    username: "minnie",
    email: "minnieknows@sumsckol.edu",
    password: "password1234",
  },
  {
    username: "valentino",
    email: "urvalentine@sweetharts.com",
    password: "password1234",
  },
  {
    username: "noah",
    email: "noahknows@ymail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
