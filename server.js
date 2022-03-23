const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Laceybabe#10213!',
    database: 'employeesDB'
});



function firstPrompt() {

    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "task",
            choices: [
                "View Employees",
                "View Employees by Department",
                "Add Employee",
                "Remove Employees",
                "Update Employee Role",
                "Add Role",
                "End"
            ]
        })
        .then(function({ task}) {
            switch (task) {
                case "View Employees":
                    viewEmployee();
                    break;

                case "View Employees by Department":
                    viewEmployeeByDepartment();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employees":
                    removeEmployees();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "End":
                    connection.end();
                    break;
            }
        });
}