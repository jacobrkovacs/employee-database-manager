const inquirer = require("inquirer");
const [ getDept, getRoles, getEmployees ] = require('./db_functions/getTables.js');
const addRole = require('./db_functions/addRole');
const { exit, getegid } = require("process");

async function mainMenu() {
    console.clear();
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
        }
    ])
    .then((response) => {
        switch (response.choice){
            case 'View All Departments':
                getDept();
                console.clear();
                mainMenu();
                break;
            case 'View All Roles':
                getRoles();
                mainMenu();
                break;
            case 'View All Employees':
                getEmployees();
                mainMenu();
                break;
            case 'Add a Role':
                addRole();
                mainMenu();
                break;
            case 'Add an Employee':
                //addEmployee();
                mainMenu();
                break;
            case 'Update an Employee Role':
                //updateEmployee();
                mainMenu();
                break;
            case 'Exit':
                exit();
        }  
    });
}

mainMenu();