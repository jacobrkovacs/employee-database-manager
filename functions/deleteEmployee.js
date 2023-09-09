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
    choice.push('Back')
})

async function deleteEmployee() {
    const mainMenu = require('../index')
    let response = await inquirer.prompt([
        {
            type: 'list',
            message: 'Which employee record would you like to delete?',
            name: 'employee',
            choices: choice
        }
    ])
    if(response.emplyee === 'Back'){
        mainMenu();
        return;
    }
        db.query(`DELETE FROM employee WHERE fname = "${response.employee}"`, (err, result) => {
            if(err){
                console.log(err)
            }
        });
    mainMenu();
};

module.exports = deleteEmployee;