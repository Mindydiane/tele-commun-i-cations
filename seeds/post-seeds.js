const { Post } = require('../models')

const postData = [
    {
        title: 'Service Workers',
        post_text: 'More than just a career choice.',
        user_id: '1'
    },
    {
        title: 'To React or Not',
        post_text: 'That is the question?',
        user_id: '2'
    },
    {
        title: 'Straight HTML or Handlebars?',
        post_text: 'One has a mustache the other one does not',
        user_id: '3'
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;