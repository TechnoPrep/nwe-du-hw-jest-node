const inquirer = require("inquirer");
const fs = require("fs");

employees = [];

function empType(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'Which type of team member would you like to add? (Use Arrow Keys)',
      choices: ['Engineer', 'Intern','I am done entering new Employees'],
      loop: false,
    },
  ])
  .then((data) => {
    const {employeeType} = data;
    questions(employeeType);
  })
}

function questions(type){

    if(type !== 'I am done entering new Employees'){
          inquirer.prompt([
        {
          type: "input",
          message: `What is the team ${type}'s name?`,
          name: "name",
        },
        {
            type: "input",
            message: `What is the team ${type}'s name?`,
            name: "id",
        },
        {
          type: "input",
          message: `What is the team ${type}'s name?`,
          name: "email",
        },
        {
          type: "input",
          message: `What is the team ${type}'s office number?`,
          name: "number",
          when: type === 'Manager'
        },
        {
          type: "input",
          message: `What is the team ${type}'s GitHub Username?`,
          name: "number",
          when: type === 'Engineer'
        },
        {
          type: "input",
          message: `What is the team ${type}'s school name?`,
          name: "number",
          when: type === 'Intern'
        },
      ])

      .then((data) => {
        // saveData(data);
        empType();
      })

    } else {
        //Create Files
        console.log('Create HTML Data');
    }
}

questions('Manager');



