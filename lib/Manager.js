const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(number) {
    const role = 'Manager';
    const fullName = '';
    const id = '';
    const email = '';

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