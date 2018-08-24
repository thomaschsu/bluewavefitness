//sequelize db for storing user login info

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 30]
        }
      },
      firstName: {
        type: DataTypes.STRING
      }
    });
  
  
  
    return User;
  };