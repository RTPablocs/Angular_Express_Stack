const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    mail: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },

  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};