const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(fullName, id, email, number) {
    const role = 'Manager';
    super(fullName, id, email);
    this.number = number;
  };

  getNumber = () => {
    //Return the School entered in index.js
    return this.number;
  };

  getRole = () => {
    //Override Role to Manager
    return this.role;
  };
};

module.exports = Manager;