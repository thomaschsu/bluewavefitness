module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    name: {
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

  Exercise.associate = function(models) {
    Exercise.belongsTo(models.Workout, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Exercise;
};