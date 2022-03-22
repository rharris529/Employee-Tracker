const connection = require('../../db/connection');
const {viewDepts, viewRoles, viewEmploy} = require('./viewOptions');
const {addDept, addRole, addEmploy} = require('./addOptions');
const updateEmployRole = require('./updateOptions');

// switch case to transfer between options
const chosen = function(answers) {
    switch(answers.choose) {

        case 'View all departments':
        viewDepts();
        break;

        case 'View all roles':
        viewRoles();
        break;

        case 'View all employees':
        viewEmploy();
        break;

        case 'Add a department':
        addDept();
        break;

        case 'Add a role': 
        addRole();
        break;

        case 'Add an employee':
        addEmploy();
        break;

        case "Update an employee's role":
        updateEmployRole();
        break;

        default: 
        console.log("Disconnecting from the database. Goodbye.")
        connection.end();
        break;

    }
}

module.exports = chosen;