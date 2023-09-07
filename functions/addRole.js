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
    await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the title of the new role? ',
                name: 'title'
            },
            {
                type: 'number',
                message: 'What is the salary of the new role? ',
                name: 'salary'
            },
            {
                type: 'number',
                message: 'What is the ID of the department this role belongs to? ',
                name: 'dept'
            }
        ])
        .then((response) => {
            db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${response.title}", ${Number(response.salary)}, ${Number(response.dept)})`, (err,result) => {
                if(err) {
                    console.error(err)
                };
                console.log(result);
            });
        });
};

module.exports = addRole;