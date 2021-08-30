const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(gitHub) {
    const fullName = '';
    const id = '';
    const email = '';

    super(id, fullName, email);
    this.gitHub = gitHub;
  };

  getGitHub = () => {
    //Return the School entered in index.js
    return this.gitHub;
  };

  getRole = () => {
    return role;
  };
};

module.exports = Engineer;
