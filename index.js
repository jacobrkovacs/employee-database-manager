const [ getDept, getRoles, getEmployees ] = require('./functions/getTables.js');
const addRole = require('./functions/addRole.js');
const { exit } = require("process");
const mainMenu = require("./functions/mainMenu.js");
const addEmployee = require("./functions/addEmployee.js");

const main = async () => {
    await mainMenu()
    .then((response) => {
        switch (response.choice){
            case 'View All Departments':
                getDept();
                main();
                break;
            case 'View All Roles':
                getRoles();
                break;
            case 'View All Employees':
                getEmployees();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                //updateEmployee();
                break;
            case 'Exit':
                console.clear();
                exit();
        }
    });
}
main();