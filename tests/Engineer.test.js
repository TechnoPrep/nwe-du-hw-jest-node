const Engineer = require('../lib/Engineer.js');

describe("Engineer", () =>{
  describe('getName', () => {
    it('Should return the name of the Engineer', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const gitHub = 'testUser'
        
        results = new Engineer(name, id, email, gitHub).getName();
    
        expect(results).toEqual(name);
      })
  })

  describe('getId', () => {
    it('Should return the Id of the Engineer', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const gitHub = 'testUser'
        
        results = new Engineer(name, id, email, gitHub).getId();
    
        expect(results).toEqual(id);
      })
  })

  describe('getEmail', () => {
    it('Should return the Email of the Engineer', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const gitHub = 'testUser'
        
        results = new Engineer(name, id, email, gitHub).getEmail();
    
        expect(results).toEqual(email);
      })
  })

  describe('getEmail', () => {
    it('Should return the GitHub Username of the Engineer', () => {
        const name = 'Full Name'
        const id = '1';
        const email = 'test@mail.com'
        const gitHub = 'testUser'
        
        results = new Engineer(name, id, email, gitHub).getGitHub();
    
        expect(results).toEqual(gitHub);
      })
  })

  describe('getRole', () => {
    it('Should return the Role of "Engineer"', () => {
        const role = 'Engineer'
        
        results = new Engineer().getRole();
    
        expect(results).toEqual(role);
      })
  })

});