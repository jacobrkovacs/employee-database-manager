const mysql = require("mysql2");
const inquirer = require("inquirer");
const getTables = require('./db_functions/query');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Firehawk9091!',
        database: 'company_db'
    }
);

function mainPage() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'selection',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        }
    ])
    .then((response) => {
        getTables(response);
    });
}

mainPage();