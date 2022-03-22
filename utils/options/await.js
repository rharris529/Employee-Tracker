const inquirer = require('inquirer');
const {viewAllPrompt} = require('../prompts/prompts');

const await = async () => {
    const {chosen} = require('./hello');

    const answer = await inquirer.prompt(viewAllPrompt);
    chosen(answer);
}

module.exports = {await};