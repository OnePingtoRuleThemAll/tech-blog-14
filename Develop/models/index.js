const User = require('./User');
const BlogPost = require('./Project');

User.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, blogPost};