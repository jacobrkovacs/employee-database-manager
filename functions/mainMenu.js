const inquirer = require("inquirer");

function mainMenu() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
        }
    ]);
};

module.exports = mainMenu;