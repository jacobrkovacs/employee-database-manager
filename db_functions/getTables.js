const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Firehawk9091!',
        database: 'company_db'
    }
);

function getDept(){
    db.query('SELECT id AS "Department ID", department_name AS "Department Name" FROM department', (err, result) => {
        console.clear();
        console.table(result)
    });
};

function getRoles() {
    db.query('SELECT role.title AS "Role", role.salary AS "Base Salary", department.department_name AS "Department" FROM role JOIN department ON role.department_id = department.id ORDER BY role.salary', (err, result) => {
        console.clear();
        console.table(result)
    });
};

function getEmployees() {
    db.query('SELECT CONCAT(fname, " ", lname) AS "Name", role.title AS "Role", role.salary AS "Salary" FROM employee JOIN role ON employee.role_id = role.id', (err, result) => {
        console.clear();
        console.table(result)
    });
};

module.exports =  [ getDept, getRoles, getEmployees ];