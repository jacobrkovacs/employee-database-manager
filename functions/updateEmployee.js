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

let choice = [];
db.query('SELECT fname FROM employee ORDER BY fname', (err, result) => {
    if(err) {
        console.error(err)
    };
    JSON.stringify(result);
    for (let i = 0; i <  result.length; i ++){
        choice.push(result[i].fname);
    }
})
let roleChoice = []
db.query('SELECT id, title FROM role ORDER BY id', (err, result) => {
    if(err) {
        console.error(err)
    };
    JSON.stringify(result);
    for (let i = 0; i <  result.length; i ++){
        roleChoice.push(result[i].id);
    }
})

async function updateEmployee() {
    console.log(choice)
    let prompt = await inquirer.prompt([
        {
            type: 'list',
            message: 'Which employee would you like to update?',
            name: 'employee',
            choices: choice
        },
        {
            type: 'list',
            message: "What is the employee's new role?",
            name: 'role',
            choices: roleChoice
        },
    ])
    db.query(`UPDATE employee
    SET role_id = 
    `, (err, result) => {
        if(err) {
            console.error(err)
        };
    })

};
module.exports = updateEmployee;
