const User = require('./User');
const Post = require('./Post');



//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//post can only belong to 1 user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };