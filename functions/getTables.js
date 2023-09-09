require('dotenv').config();
const promisify = require('util').promisify;
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'company_db'
    }
);

let res = {}
function getDept(){
    const mainMenu = require('../index');
    db.query('SELECT id AS "Department ID", department_name AS "Department Name" FROM department', (err, result) => {
        if(err) {
            console.error(err)
        };
        JSON.stringify(result);
        res = result;
    });
    console.table(res);
    mainMenu();
    res = {}
};

function getRoles() {
    const mainMenu = require('../index');
    db.query('SELECT role.title AS "Role", role.salary AS "Base Salary", department.department_name AS "Department" FROM role JOIN department ON role.department_id = department.id ORDER BY role.salary', (err, result) => {
        if(err) {
            console.error(err)
        };
        JSON.stringify(result);
        res = result;
    });
    console.table(res);
    mainMenu();
    res = {};
};

function getEmployees() {
    const mainMenu = require('../index');
    db.query('SELECT CONCAT(fname, " ", lname) AS "Name", role.title AS "Role", role.salary AS "Salary" FROM employee JOIN role ON employee.role_id = role.id', (err, result) => {
        if(err) {
            console.error(err)
        };
        JSON.stringify(result);
        res = result;
    });
    console.table(res);
    mainMenu();
    res = {};
};

let getDepartment = promisify(getDept);
let getAllRoles = promisify(getRoles);
let getAllEmployees = promisify(getEmployees);

module.exports =  [ getDepartment, getAllRoles, getAllEmployees ];