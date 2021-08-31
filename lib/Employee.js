class Employee {
  constructor(fullName, id, email) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
  };

  getId = () => {
      //Return the ID assigned in index.js
      return this.id;
  };

  getName = () => {
      //Return the Name entered in index.js
    return this.fullName

  };

  getEmail = () => {
      //Return the Email entered in index.js
    return this.email
  };

  getRole = () => {
      //Set Role to Employee
      return 'Employee';
  };
}

module.exports = Employee;
