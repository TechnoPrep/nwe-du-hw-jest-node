const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('Manager');
const Engineer = require('Engineer');
const Intern = require('Intern');

let team = [];

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
          name: "gitHub",
          when: type === 'Engineer'
        },
        {
          type: "input",
          message: `What is the team ${type}'s school name?`,
          name: "school",
          when: type === 'Intern'
        },
      ])

      .then((data) => {
        buildTeam(type, data);
        empType();
      })

    } else {
        //Create Files
        console.log('Create HTML Data');
    }
}

const buildTeam = (type, data) => {
    if(type === 'Manager') {
        // let resType = 'number';
        let addEmp = new Manager (
            data.name,
            data.id,
            data.email,
            data.number
        )
        team.push(addEmp);
    } else if(type === 'Engineer') {
        // let resType = 'gitHub';
        let addEmp = new Engineer (
            data.name,
            data.id,
            data.email,
            data.gitHub
        )
        team.push(addEmp);
    } else {
        // let resType = 'school'
        let addEmp = new Intern (
            data.name,
            data.id,
            data.email,
            data.school
        )
        team.push(addEmp);
    }
}

questions('Manager');



