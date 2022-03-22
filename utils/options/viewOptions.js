const connection = require('../../db/connection');
const table = require('console.table');
const hello = require('./hello');

// View all current departments in db
viewDepts = () => {
    console.log('Here are all the current departments: \n');
    let query = `SELECT department.id, department.name AS department FROM department`;

    connection.query(query, (err, result) => {
        if (err) throw err;

        console.table(result);

        // hello():
    })
};

// View all current roles in db
viewRoles = () => {
    console.log('Here are all the current roles: \n');
    let query = `SELECT r0le.id, r0le.title AS roles, department.name AS department FROM r0le
    INNER JOIN department ON r0le.department_id = department.id`;

    connection.query(query, (err, result) => {
        if (err) throw err;

        console.table(result);

        // hello():
    })
};

viewEmploy = () => {
    console.log('Here are all the current employees: \n');
    let query = `SELECT employee.id,
                employee.first_name,
                employee.last_name,
                r0le.title,
                department.name AS department,
                r0le.salary,
                CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee
                LEFT JOIN r0le ON employee.role_id = r0le.id
                LEFT JOIN department ON roles.department_id = department.id
                LEFT JOIN employeee manager ON employee.manager_id = manager.id`;
    
    connection.query(query, (err, result) => {
        if (err) throw err;

        console.table(result);

        // hello():
    })
};

module.exports = {viewDepts, viewRoles, viewEmploy};

