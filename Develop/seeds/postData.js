const { Post } = require("../models");

const postData = [
    {
        title: "Blog Post Numero Uno",
        content: "Awwww yea first blog Post!!!",
        user_id: 1,
    }, 
    {
        title: "Second blog post",
        content: "blah blah blah",
        user_id: 2,
    },
    {
        title: "Music and how it makes life better",
        content: "blah blah",
        user_id: 3,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;