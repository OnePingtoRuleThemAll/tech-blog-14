const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "Great article!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "This is fantastic!!!",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "I laughed way too hard when I read this",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "This is crazy...",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "Goodness that's just beautiful...",
        user_id: 5,
        post_id: 1,
    }
];

const seedComments =() => Comment.bulkCreate(commentData);

module.exports = seedComments;