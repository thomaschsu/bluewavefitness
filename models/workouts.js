module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    exercise_name: {type:DataTypes.STRING,allowNull: false}
  });

  Workout.associate = function(models) {
    Workout.hasMany(models.Exercise, {
      onDelete: "cascade"
    });
  };
  return Workout;
};
