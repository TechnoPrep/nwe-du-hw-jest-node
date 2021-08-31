const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(fullName, id, email, gitHub) {
    super(fullName, id, email);
    this.gitHub = gitHub;
  };

  getGitHub = () => {
    //Return the School entered in index.js
    return this.gitHub;
  };

  getRole = () => {
    return 'Engineer'
  };
};

module.exports = Engineer;
