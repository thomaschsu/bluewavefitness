module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    name: {type:DataTypes.STRING,allowNull: false},
    reps: {type:DataTypes.INTEGER,allowNull: false, defaultValue: 0},
    sets: {type:DataTypes.INTEGER,allowNull: false, defaultValue: 0},
    weight: {type:DataTypes.INTEGER,allowNull: false, defaultValue: 0},   
    workoutName: {type:DataTypes.STRING,allowNull: false}
  });


  return Exercise;
};