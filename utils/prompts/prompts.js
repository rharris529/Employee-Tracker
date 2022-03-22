// View all option available
const viewAllPrompt = [
    {
        type: 'list',
        name: 'choose',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', "Update an employee's role", 'EXIT']
    }
];

// Add a new department
const addDeptPrompt = [
    {
        type: 'input',
        name: 'addDept',
        message: 'What would you like to call this new department?',
        validate: addDept => {
            if(addDept) {
                return true;
            } else {
                console.log('This department must have a valid name. Please try again.');
            }
        }
    }
];

// Add a new role
const addRolePrompt = [
    {
        type: 'input',
        name: 'addRole',
        message: 'What role would you like to add?',
        validate: addRole => {
            if(addRole) {
                return true;
            } else {
                console.log('This role must have a valid name. Please try again.');
            }
        }
    },
    {
        type: 'input',
        name: 'addSalary',
        message: 'What is the salary of this new role?',
        validate: addSalary => {
            if(addSalary) {
                return true;
            } else {
                console.log('Please enter an amount to the specified role.');
            }
        }
    }
];

// Add a new employee's name
const addNamePrompt = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?",
        validate: firstName => {
            if(firstName) {
                return true;
            } else {
                console.log("Please enter this employee's first name.");
            }
        }  
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?",
        validate: lastName => {
            if(lastName) {
                return true;
            } else {
                console.log("Please enter this employee's last name.");
            }
        }  
    }
];

// add employee's role
const addEmployRole = [
    {
        type: 'list',
        name: 'role',
        message: "What's this employee's role?",
        choices: []
    }
];

// update an employee's role
const updateEmployRole = [
    {
        type: 'list',
        name: 'employee',
        message: 'Which employee would you like to update?',
        choices: []
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: "What is this employee's new role?",
        choices: []
    }
];

module.exports = {viewAllPrompt, addDeptPrompt, addRolePrompt, addNamePrompt, addEmployRole, updateEmployRole};
