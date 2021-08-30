const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(school) {
    const fullName = '';
    const id = '';
    const email = '';

    super(id, fullName, email);
    this.school = school;
  };

  getSchool = () => {
    //Return the School entered in index.js
    return this.school
  };

  getRole = () => {
    return role;
  };
};

module.exports = Intern;
