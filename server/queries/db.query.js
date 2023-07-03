const query = {}
// tables: 
// CREATE TABLE member(id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL);
// CREATE TABLE workout(id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, goal VARCHAR(255), complete BOOLEAN NOT NULL DEFAULT FALSE, day DATE DEFAULT CURRENT_DATE);
// CREATE TABLE exercise(id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, intervals INT, sets INT, reps INT, rest INT);
// CREATE TABLE session(ssid VARCHAR(255) PRIMARY KEY, member_id INT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY(member_id) REFERENCES member(id) ON DELETE CASCADE);

// join tables:
// CREATE TABLE member_workout(member_id INT REFERENCES member(id) ON DELETE CASCADE, workout_id INT REFERENCES workout(id) ON DELETE CASCADE, PRIMARY KEY(member_id, workout_id));
// CREATE TABLE workout_exercise(workout_id INTEGER REFERENCES workout(id) ON DELETE CASCADE, exercise_id INTEGER REFERENCES exercise(id) ON DELETE CASCADE, PRIMARY KEY(workout_id, exercise_id));

// create table entries
query.createMember = 'INSERT INTO member(username, password, firstname, lastname) VALUES($1, $2, $3, $4) RETURNING *';
query.createWorkout = 'INSERT INTO workout(name, goal, day) VALUES ($1, $2, $3) RETURNING *';
query.createExercise = 'INSERT INTO exercise(name, intervals, sets, reps, rest) VALUES ($1, $2, $3, $4, $5) RETURNING *';
query.createSession = 'INSERT INTO session(ssid, member_id) VALUES ($1, $2) RETURNING *';

// create join table entries
query.createMemberWorkout = 'INSERT INTO member_workout (member_id, workout_id) VALUES ($1, (SELECT id FROM workout ORDER BY id DESC LIMIT 1))';
query.createWorkoutExercise = 'INSERT INTO workout_exercise (workout_id, exercise_id) VALUES ($1, (SELECT id FROM exercise ORDER BY id DESC LIMIT 1))';

// get member + member session
query.getMember = 'SELECT * FROM member WHERE username = $1';
query.getMemberSession = 'SELECT member.* FROM member JOIN session ON member.id = session.member_id';
query.verifySession = 'SELECT member.* FROM member LEFT OUTER JOIN session ON session.member_id = member.id WHERE session.ssid = $1';

// get all workouts for 1 user
query.getAllWorkouts = 'SELECT workout.* FROM workout INNER JOIN member_workout ON workout.id = member_workout.workout_id INNER JOIN member ON member.id = member_workout.member_id WHERE member.id = $1';
query.getAllExercises = 'SELECT exercise.* FROM exercise INNER JOIN workout_exercise ON exercise.id = workout_exercise.exercise_id INNER JOIN workout ON workout.id = workout_exercuse.workout_id WHERE workout.id = $1';

// update workouts
query.updateWorkout = 'UPDATE workout SET name = $1, goal = $2, complete = $3 WHERE id = $4'
query.updateWorkoutName = 'UPDATE workout SET name = $1 WHERE id = $2';
query.updateWorkoutGoal = 'UPDATE workout SET goal = $1 WHERE id = $2';
query.updateWorkoutComplete = 'UPDATE workout SET complete = $1 WHERE id = $2';
 
// update exercise
query.updateExercise = 'UPDATE exercise SET name = $1, intervals = $2, sets = $3, reps = $4, rest = $5 WHERE id = $6'
query.updateExerciseName = 'UPDATE exercise SET name = $1 WHERE id = $2'
query.updateExerciseIntervals = 'UPDATE exercise SET intervals = $1 WHERE id = $2'
query.updateExerciseSets = 'UPDATE exercise SET sets = $1 WHERE id = $2'
query.updateExerciseReps = 'UPDATE exercise SET reps = $1 WHERE id = $2'
query.updateExerciseRest = 'UPDATE exercise SET rest = $1 WHERE id = $2'

//delete workout
query.deleteWorkout = 'DELETE FROM workout WHERE id = $1';
//delete member_workout
query.deleteMemberWorkout = 'DELETE FROM member_workout WHERE member_id = $1 AND workout_id = $2';
//delete session
query.deleteSession = 'DELETE FROM session WHERE member_id = $1'
//delete exercise
query.deleteExercise = 'DELETE FROM exercise WHERE id = $1';
//delete workout_exercise
query.deleteWorkoutExercise = 'DELETE FROM workout_exercise WHERE workout_id = $1 AND exercise_id = $2';

module.exports = query
