module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define("workout", {
    exercise: {type:DataTypes.STRING,allowNull: false},
    reps: {type: DataTypes.INTEGER, defautValue: 0},
    sets: {type: DataTypes.INTEGER, defautValue: 0},
    weight: {type: DataType.INTEGER, defautValue: 0}
  });
  return Workout;
};
