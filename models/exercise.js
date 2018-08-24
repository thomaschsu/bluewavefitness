module.exports = function(sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
      name: {type:DataTypes.JSON},
         
    });
   
    return Exercise;
  };
  