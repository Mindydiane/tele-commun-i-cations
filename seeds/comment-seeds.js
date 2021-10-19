const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'It is also a game',
        user_id: '1',
        post_id: '1'
    },
    {
        comment_text: 'Reach is cool,more than just a question but more on the know how. I will let you know when I know how...',
        user_id: '2',
        post_id: '2'
    },
    {
        comment_text: 'I feel like handlebars is a level up from HTML but of course nothing wrong with straight HTML',
        user_id: '3',
        post_id: '3'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;