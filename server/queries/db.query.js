// tables: 
// CREATE TABLE member (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL)
// CREATE TABLE workout (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, goal VARCHAR(255), complete BOOLEAN NOT NULL DEFAULT FALSE, day DATE DEFAULT CURRENT_DATE)
// CREATE TABLE exercise (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, intervals INT, sets INT, reps INT, rest INT)
// CREATE TABLE session (ssid VARCHAR(255) PRIMARY KEY, member_id INT, created_at DATE DEFAULT CURRENT_DATE, FOREIGN KEY (member_id) REFERENCES member(id) ON DELETE CASCADE)

//join tables:
// CREATE TABLE member_workout (member_id INT REFERENCES member(id), workout_id INT REFERENCES workout(id), PRIMARY KEY (member_id, workout_id))
// CREATE TABLE workout_exercise (workout_id INTEGER REFERENCES workout(id), exercise_id INTEGER REFERENCES exercise(id), PRIMARY KEY (workout_id, exercise_id))

// create table entries
const createMember = 'INSERT INTO member(username, password, firstname, lastname) VALUES($1, $2, $3, $4) RETURNING *';
const createWorkout = 'INSERT INTO workout(name, goal) VALUES ($1, $2) RETURNING id';
const createExercise = 'INSERT INTO exercise(name, intervals, sets, reps, rest) VALUES ($1, $2, $3, $4, $5) RETURNING id';
const createSession = 'INSERT INTO session(ssid, member_id) VALUES ($1, $2) RETURNING *'

// create join table entries
const createMemberWorkout = 'INSERT INTO member_workout (member_id, workout_id) VALUES ($1, (SELECT id FROM workout ORDER BY id DESC LIMIT 1))';
const createWorkoutExercise = 'INSERT INTO workout_exercise (workout_id, exercise_id) VALUES ($1, (SELECT id FROM exercise ORDER BY id DESC LIMIT 1))';

// foreign key memberid references  on cascade delete

const getMember = 'SELECT * FROM member WHERE username = $1';

const getAllWorkouts = 'SELECT workout.* FROM workout INNER JOIN member_workout ON workout.id = member_workout.workout_id INNER JOIN member ON member.id = member_workout.member_id WHERE member.id = $1';

const getAllExercises = 'SELECT exercise.* FROM exercise INNER JOIN workout_exercise ON exercise.id = workout_exercise.exercise_id INNER JOIN workout ON workout.id = workout_exercuse.workout_id WHERE workout.id = $1';

