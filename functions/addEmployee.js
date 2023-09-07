const inquirer = require('inquirer');
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Firehawk9091!',
        database: 'company_db'
    }
);

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Employee First Name: ',
            name: 'fname'
        },
        {
            type: 'input',
            message: 'Employee Last Name: ',
            name: 'lname'
        },
        {
            type: 'number',
            message: 'Employee Role ID: ',
            name: 'roleID'
        },
        {
            type: 'number',
            message: 'Employee Manager ID: ',
            name: 'managerID'
        }
    ])
    .then((response) => {
        db.query(`INSERT INTO employee (fname, lname, role_id, manager_id) VALUES ("${response.fname}", "${response.lname}", ${response.roleID}, ${response.managerID})`, (err, result) => {
            if(err){
                console.log(err)
            } else {
                console.log(result)
            }
        })
    })
};

module.exports = addEmployee;