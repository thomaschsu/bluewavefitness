module.exports = function(sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
      name: {type:DataTypes.STRING(1000)},
         
    });
   
    return Exercise;
  };