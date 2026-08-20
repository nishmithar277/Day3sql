const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./college.db");

db.serialize(() => {

    
    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY,
            name TEXT,
            age INTEGER,
            department TEXT,
            cgpa REAL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS departments (
            id INTEGER PRIMARY KEY,
            name TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY,
            course_name TEXT,
            department TEXT
        )
    `);

    
    db.run(`
        INSERT OR IGNORE INTO departments VALUES
        (1, 'Computer Science'),
        (2, 'Electronics'),
        (3, 'Mechanical')
    `);

    
    db.run(`
        INSERT OR IGNORE INTO students VALUES
        (1, 'Alice', 20, 'Computer Science', 8.7),
        (2, 'Bob', 21, 'Electronics', 7.8),
        (3, 'Charlie', 20, 'Mechanical', 8.2),
        (4, 'David', 22, 'Computer Science', 9.1),
        (5, 'Emma', 19, 'Electronics', 8.5),
        (6, 'Frank', 21, 'Mechanical', 7.6),
        (7, 'Grace', 20, 'Computer Science', 8.9),
        (8, 'Henry', 22, 'Electronics', 9.2),
        (9, 'Ivy', 19, 'Mechanical', 8.0),
        (10, 'Jack', 21, 'Computer Science', 7.9)
    `);

    
    db.run(`
        INSERT OR IGNORE INTO courses VALUES
        (1, 'Database Management', 'Computer Science'),
        (2, 'Data Structures', 'Computer Science'),
        (3, 'Digital Electronics', 'Electronics'),
        (4, 'Thermodynamics', 'Mechanical')
    `);

    console.log("Database setup completed!");
});

db.close();