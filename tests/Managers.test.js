const Manager = require('../lib/Manager.js');

describe("Manager", () =>{
  describe('getName', () => {
    it('Should return the name of the Manager', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const number = '555-555-5555'
        
        results = new Manager(name, id, email, number).getName();
    
        expect(results).toEqual(name);
      })
  })

  describe('getId', () => {
    it('Should return the Id of the Manager', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const number = '555-555-5555'
        
        results = new Manager(name, id, email, number).getId();
    
        expect(results).toEqual(id);
      })
  })

  describe('getEmail', () => {
    it('Should return the Email of the Manager', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const number = '555-555-5555'
        
        results = new Manager(name, id, email, number).getEmail();
    
        expect(results).toEqual(email);
      })
  })

  describe('getEmail', () => {
    it('Should return the number Username of the Manager', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const number = '555-555-5555'
        
        results = new Manager(name, id, email, number).getNumber();
    
        expect(results).toEqual(number);
      })
  })

  describe('getRole', () => {
    it('Should return the Role of "Manager"', () => {
        const role = 'Manager'
        
        results = new Manager().getRole();
    
        expect(results).toEqual(role);
      })
  })

});