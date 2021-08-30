class Employee {
  constructor(fulName, id, email) {
    let role = 'Employee'
    this.id = id;
    this.fulName = fulName;
    this.email = email;
  };

  getId = () => {
      //Return the ID assigned in index.js
      return this.id;
  };

  getName = () => {
      //Return the Name entered in index.js
    return this.fulName

  };

  getEmail = () => {
      //Return the Email entered in index.js
    return this.email
  };

  getRole = () => {
      //Set Role to Employee
      return this.role;
  };
}

module.exports = Employee;
