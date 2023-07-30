// import the required modules
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require("./comment-routes");

// set up the routes
router.use('/users', userRoutes); // routes for the user related function
router.use('/blogs', blogRoutes); // routes for the post-relatied function
router.use("/comments", commentRoutes); // routes for comment-related function 

// export the router
module.exports = router;