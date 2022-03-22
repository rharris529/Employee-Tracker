const connection = require('../../db/connection');
const inquirer = require('inquirer');
const {addDeptPrompt, addRolePrompt, addNamePrompt} = require('../prompts/prompts');
const {viewDepts, viewRoles, viewEmploy} = require('../options/viewOptions');
// add Dept to department table
addDept = () => {
    inquirer.prompt(addDeptPrompt)
        .then(answer => {
            var query = `INSERT INTO department (department_name)
                        VALUES (?)`;
            connection.query(query, answer.addDept, (err, result) => {
                if (err) throw err;
                console.log("The new department" + "(" + answer.addDept + ")" + "has been created!");

                viewDepts();
            })
        })
}; 

// add Role to r0le table
addRole = () => {
    inquirer.prompt(addRolePrompt)
    .then(answer => { 
        const params = [answer.title, answer.salary];
        var query = `SELECT department_name, id FROM department`;

        connection.query(query, params, (err, result) => {
            if (err) throw err;

            const dept = result.map(({ department_name, id }) => ({ name: department_name, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'deptChange',
                    message: 'What department is this role?',
                    choices: dept
                }
            ])
            .then(chosenDept => {
                const dept = chosenDept.dept; 
                params.push(dept);

                const sql = `INSERT INTO roles (title, salary, department_id)
                            VALUES (?, ?, ?)`;
                connection.query(sql, params, (err, result) => {
                    if (err) throw err;
                    console.log("You've added " + answer.title + " to the employee roles.");

                    viewRoles();
                });
            });
        });
    });
};

// add an Employeee 
addEmploy = () => {
    inquirer.prompt(addNamePrompt)
    .then(answer => {
        const params = [answer.first_name, answer.last_name]

        const query = `SELECT r0le.id, r0le.title FROM r0le`;

        connection.query(query, (err, result) => {
            if (err) throw err;

            const roles = result.map(({ id, title, }) => ({ name: title, value: id}));

            inquirer.prompt({
                type: 'list',
                name: 'role',
                message: "What is this employee's role?",
                choices: roles
            })
            .then(chosenRole => {
                const role = chosenRole.role;
                params.push(role);

                const managerQuery = `SELECT * FROM employee`;

                connection.query(managerQuery, (err, result) => {
                    if (err) throw err;

                    const managers = result.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'manager',
                            message: "Who is this employee's manager?",
                            choices: managers
                        }
                    ])
                    .then(chosenManager => {
                        const manager = chosenManager.manager;
                        params.push(manager);

                        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                        VALUES (?, ?, ?, ?)`;

                        connection.query(sql, params, (err, result) => {
                            if (err) throw err;
                            console.log("Employee added!");

                            viewEmploy();
                        });
                    });
                });
            });
        });
    });
};

module.exports = {addDept, addRole, addEmploy};