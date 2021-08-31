const Employee = require('../lib/Employee.js');

describe("Employee", () =>{
  describe('getName', () => {
    it('Should return the name of Employee', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        
        results = new Employee(name, id, email).getName();
    
        expect(results).toEqual(name);
      })
  })

  describe('getId', () => {
    it('Should return the Id of Employee', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        
        results = new Employee(name, id, email).getId();
    
        expect(results).toEqual(id);
      })
  })

  describe('getEmail', () => {
    it('Should return the Email of Employee', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        
        results = new Employee(name, id, email).getEmail();
    
        expect(results).toEqual(email);
      })
  })

  describe('getRole', () => {
    it('Should return the Role of "Employee"', () => {
        const role = 'Employee'
        
        results = new Employee().getRole();
    
        expect(results).toEqual(role);
      })
  })

});