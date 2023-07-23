const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes'); //changed from 'project' to 'blogRoutes'

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes); //changed from 'project' to 'blogRoutes' 

module.exports = router;