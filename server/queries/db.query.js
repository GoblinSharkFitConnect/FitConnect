// tables: 
// CREATE TABLE member (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL);
// CREATE TABLE workout (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, goal VARCHAR(255), complete BOOLEAN NOT NULL DEFAULT FALSE, day DATE DEFAULT CURRENT_DATE);
// CREATE TABLE exercise (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, intervals INT, sets INT, reps INT, rest INT);

//join tables:
// CREATE TABLE member_workout (member_id INT REFERENCES member(id), workout_id INT REFERENCES workout(id), PRIMARY KEY (member_id, workout_id));
// CREATE TABLE workout_exercise (workout_id INTEGER REFERENCES workout(id), exercise_id INTEGER REFERENCES exercise(id), PRIMARY KEY (workout_id, exercise_id));

const userWorkout = `SELECT workout.id, workout.name, workout.goal, workout.complete, workout.day FROM workout JOIN workout_exercise ON workout.id = workout_exercise.workout_id JOIN member ON member.id = workout_exercise.member_id WHERE member.id = ${memberID};`;