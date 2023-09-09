const inquirer = require('inquirer');
const [ getDepartment, getAllRoles, getAllEmployees ] = require('./functions/getTables');
const addNewRole = require('./functions/addRole.js');
const addEmployee = require("./functions/addEmployee.js");
const updateEmployee = require('./functions/updateEmployee.js');
const { exit } = require("process");
const deleteEmployee = require('./functions/deleteEmployee')
const deleteRole = require('./functions/deleteRole')

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'Delete Employee',
                'Delete Role',
                'Exit'
            ]
        }
    ]).then((res => {
        switch (res.choice) {
            case 'View All Departments':
                getDepartment();
                break;
            case 'View All Roles':
                getAllRoles();
                break;
            case 'View All Employees':
                getAllEmployees();
                break;
            case 'Add a Role':
                addNewRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                updateEmployee();
                break;
            case 'Delete Employee':
                deleteEmployee();
                break;
            case 'Delete Role':
                deleteRole();
                break;
            case 'Exit':
                return exit();
        };
    }))
};
mainMenu();

module.exports = mainMenu;