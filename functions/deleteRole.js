require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require("mysql2");
const { indexOf } = require('./getTables');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'company_db'
    }
);

let roleChoice = []
db.query('SELECT id FROM role ORDER BY id', (err, result) => {
    if(err) {
        console.error(err)
    };
    JSON.stringify(result);
    for (let i = 0; i <  result.length; i ++){
        roleChoice.push(result[i].id);
    }
    roleChoice.push('Back')
})
async function deleteRole() {
    const mainMenu = require('../index')
    let response = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which role would you like to delete?',
                name: 'id',
                choices: roleChoice
            }
        ]);
        if(response.id === 'Back') {
            mainMenu();
            return
        }
        db.query(`DELETE FROM role WHERE id = ${response.id}`, (err, result) => {
            if(err) {
                console.error(err)
            };
        });
        mainMenu()
};

module.exports = deleteRole;