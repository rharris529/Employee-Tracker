const connection = require('../../db/connection');
const inquirer = require('inquirer');

// update an employee's data
updateEmployRole = () => {
    const query = `SELECT * FROM employee`;

    connection.query(query, (err, result) => {
        if (err) throw err;

        const employees = result.map(({ id, first_name, last_name}) => ({ name: first_name + " " + last_name, value: id}));

        inquirer.prompt([
            {
                type: 'list',
                name: 'employName',
                message: 'Which employee would you like to update?',
                choices: employees
            }
        ])
        .then(chosenEmploy => {
            const employee = chosenEmploy.employName;
            const param = [];
            param.push(employee);

            const roleQuery = `SELECT * FROM r0le`;

            connection.query(roleQuery, (err, result) => {
                if (err) throw err;

                const roles = result.map(({ id, title}) => ({name: title, value: id}));

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: "What would you like to change this employee's role to?",
                        choices: roles
                    }
                ])
                .then(chosenRole => {
                    const role = chosenRole.role;
                    param.push(role);

                    let employee = param[0]
                    param[0] = role
                    param[1] = employee

                    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

                    connection.query(sql, (err, result) => {
                        if (err) throw err;
                        console.log('Employee succesfully updated.')

                        viewEmploy();
                    });
                });
            });
        });
    });
};

module.exports = {updateEmployRole};