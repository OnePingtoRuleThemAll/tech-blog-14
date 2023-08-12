//importing seed data functions
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// import sequelize connections
const sequelize = require("./commentData");

//function to see all data
const seedAll = async ()=> {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedPosts();
    await seedComments();

    process.exit(0);
};

seedAll();