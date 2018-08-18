DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;

USE workout_db;

CREATE TABLE workout(
  id INT NOT NULL AUTO_INCREMENT,
  exercise VARCHAR(100) NOT NULL,
  reps INT default 0,
  sets INT default 0,
  weight INT default 0,
  PRIMARY KEY (id)
);
