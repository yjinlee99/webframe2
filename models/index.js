const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Chat = require('./chat');
const Room = require('./room');

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Chat = Chat;
db.Room = Room;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Chat.init(sequelize);
Room.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Chat.associate(db);
Room.associate(db);

module.exports = db;