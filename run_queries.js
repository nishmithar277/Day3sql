const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./college.db");

console.log("\n--- ALL STUDENTS ---");

db.all("SELECT * FROM students", [], (err, rows) => {
    console.table(rows);

    console.log("\n--- NAME AND CGPA ---");

    db.all("SELECT name, cgpa FROM students", [], (err, rows) => {
        console.table(rows);

        console.log("\n--- CGPA GREATER THAN 8 ---");

        db.all(
            "SELECT * FROM students WHERE cgpa > 8.0",
            [],
            (err, rows) => {
                console.table(rows);

                console.log("\n--- AGGREGATE FUNCTIONS ---");

                db.get(`
                    SELECT
                    COUNT(*) AS count,
                    AVG(cgpa) AS average,
                    MAX(cgpa) AS maximum,
                    MIN(cgpa) AS minimum,
                    SUM(cgpa) AS total
                    FROM students
                `, [], (err, row) => {
                    console.table(row);

                    console.log("\n--- COUNT BY DEPARTMENT ---");

                    db.all(`
                        SELECT department, COUNT(*) AS student_count
                        FROM students
                        GROUP BY department
                    `, [], (err, rows) => {
                        console.table(rows);

                        console.log("\n--- AVERAGE CGPA BY DEPARTMENT ---");

                        db.all(`
                            SELECT department, AVG(cgpa) AS average_cgpa
                            FROM students
                            GROUP BY department
                        `, [], (err, rows) => {
                            console.table(rows);

                            db.close();
                        });
                    });
                });
            }
        );
    });
});