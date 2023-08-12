// Import post model
const { User } = require("../models");
//array of dummy usernames and passwords
const userData =
 [
    {
        "name": "Oliver",
        "email": "oliver@hotmail.com",
        "password": "password1234"
    },
    {
        "name": "Mat",
        "email": "mpickles@hotmail.com",
        "password": "mickey456123"
    },
    {
        "name": "Noah",
        "email": "seabass489@gmail.com",
        "password": "password899"
    }
];

const seedUsers = () => User.bulkCreate(userData);
//exporiting seedposts
module.exports = seedUsers;