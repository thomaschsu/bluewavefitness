module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    exerciseId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reps: {
      type: DataTypes.INTEGER,
      defautValue: 0
    },
    sets: {
      type: DataTypes.INTEGER,
      defautValue: 0
    },
    weight: {
      type: DataTypes.INTEGER,
      defautValue: 0
    }
  });

  Workout.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Workout.hasMany(models.Exercise, {
      onDelete: "cascade"
    });
  };

  return Workout;
};