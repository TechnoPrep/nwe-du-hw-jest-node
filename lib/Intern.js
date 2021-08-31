const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(fullName, id, email, school) {
    super(fullName, id, email);
    this.school = school;
  };

  getSchool = () => {
    //Return the School entered in index.js
    return this.school
  };

  getRole = () => {
    return 'Intern';
  };
};

module.exports = Intern;
