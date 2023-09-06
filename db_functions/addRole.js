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


async function addRole() {
    console.clear();
    await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of the new role?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary of the new role?',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is the ID of the department this role belongs to?',
                name: 'dept'
            }
        ])
        .then((response) => {
            console.log(Number(response.salary))
            db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${responsetitle}", ${Number(response.salary)}, ${Number(response.dept)})`, (err,result) => {
                console.log(result)
            })
        })
}

module.exports = addRole;