const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Laceybabe#10213!',
    database: 'employeesDB'
});