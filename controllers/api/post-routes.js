const router = require('express').Router();
const session = require('express-session');
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;