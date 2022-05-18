const Sequelize = require('sequelize');

module.exports = class Room extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Room',
        tableName: 'rooms',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  static associate(db) {
    db.Room.belongsTo(db.User, {
      foreignKey: 'user1Id',
    });
    db.Room.belongsTo(db.User, {
      foreignKey: 'user2Id',
    });
    db.Room.hasMany(db.Chat);
  }
};