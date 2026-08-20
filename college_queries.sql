-- 1. BASIC QUERIES

-- Retrieve all students
SELECT * FROM students;

-- Retrieve names and CGPAs
SELECT name, cgpa FROM students;

-- Students with CGPA greater than 8.0
SELECT * FROM students
WHERE cgpa > 8.0;


-- 2. AGGREGATE FUNCTIONS

SELECT COUNT(*) AS total_students
FROM students;

SELECT AVG(cgpa) AS average_cgpa
FROM students;

SELECT MAX(cgpa) AS highest_cgpa
FROM students;

SELECT MIN(cgpa) AS lowest_cgpa
FROM students;

SELECT SUM(cgpa) AS total_cgpa
FROM students;


-- 3. GROUP BY

-- Count students in each department
SELECT department, COUNT(*) AS student_count
FROM students
GROUP BY department;

-- Average CGPA by department
SELECT department, AVG(cgpa) AS average_cgpa
FROM students
GROUP BY department;