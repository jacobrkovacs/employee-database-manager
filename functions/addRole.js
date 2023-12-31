const promisify = require('util').promisify;
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'company_db'
    }
);


async function addRole() {
    const mainMenu = require('../index')
    let response = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the title of the new role? ',
                name: 'title'
            },
            {
                type: 'number',
                message: 'What is the salary of the new role? ',
                name: 'salary'
            },
            {
                type: 'number',
                message: 'What is the ID of the department this role belongs to? ',
                name: 'dept'
            }
        ]);
        db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${response.title}", ${response.salary}, ${response.dept})`, (err, result) => {
            if(err) {
                console.error(err)
            };
        });
        mainMenu()
};

let addNewRole = promisify(addRole);

module.exports = addNewRole;