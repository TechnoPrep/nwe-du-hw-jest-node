const Intern = require('../lib/Intern.js');

describe("Intern", () =>{
  describe('getName', () => {
    it('Should return the name of the Intern', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const school = 'Denver University'
        
        results = new Intern(name, id, email, school).getName();
    
        expect(results).toEqual(name);
      })
  })

  describe('getId', () => {
    it('Should return the Id of the Intern', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const school = 'Denver University'
        
        results = new Intern(name, id, email, school).getId();
    
        expect(results).toEqual(id);
      })
  })

  describe('getEmail', () => {
    it('Should return the Email of the Intern', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const school = 'Denver University'
        
        results = new Intern(name, id, email, school).getEmail();
    
        expect(results).toEqual(email);
      })
  })

  describe('getEmail', () => {
    it('Should return the school Username of the Intern', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const school = 'Denver University'
        
        results = new Intern(name, id, email, school).getSchool();
    
        expect(results).toEqual(school);
      })
  })

  describe('getRole', () => {
    it('Should return the Role of "Intern"', () => {
        const role = 'Intern'
        
        results = new Intern().getRole();
    
        expect(results).toEqual(role);
      })
  })

});