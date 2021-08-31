// Set a blank string to append data to later
let team = ``;

const generateCards = (data) => {
  //Loop over the array of objects passed from data

  data.map((emp) => {
    //Conditional to determine Employee Role
    // Iterate over the array of objects and append the HTMl to the team string
    switch (emp.getRole()) {
      case "Manager":
        team += createMgmt(emp);
        break;
      case "Engineer":
        team += createEng(emp);
        break;
      case "Intern":
        team += createInt(emp);
        break;

      default:
        break;
    }
  });
  return team;
};

const createMgmt = (data) => {
  const { number, fullName, id, email } = data;

  let cleanNum = formatNumber(number);

  return `
  <div class="card col-3 card-custom border-custom">
        <div class="card-body top-border-custom bg-primary">
          <h5 class="card-title text-white">${fullName}</h5>
          <div class="row margin-reset">
            <i class="fas fa-coffee float-left"></i>
            <p class="card-text text-white">${data.getRole()}</p>
          </div>
        </div>
        <div class="container p-3 bottom-border-custom bg-gray-custom">
          <ul class=" bg-white list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Number: ${cleanNum}</li>
          </ul>
        </div>
      </div>`;
};

const createEng = (data) => {
  const { gitHub, fullName, id, email } = data;

  return `
  <div class="card col-3 card-custom border-custom">
        <div class="card-body top-border-custom bg-primary">
          <h5 class="card-title text-white">${fullName}</h5>
          <div class="row margin-reset">
            <i class="fas fa-glasses float-left"></i>
            <p class="card-text text-white">${data.getRole()}</p>
          </div>
        </div>
        <div class="container p-3 bottom-border-custom bg-gray-custom">
          <ul class=" bg-white list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">GitHub: ${gitHub}</li>
          </ul>
        </div>
      </div>`;
};

// Create Intern Contact Card
const createInt = (data) => {
  const { school , fullName, id, email } = data;

  return `
  <div class="card col-3 card-custom border-custom">
        <div class="card-body top-border-custom bg-primary">
          <h5 class="card-title text-white">${fullName}</h5>
          <div class="row margin-reset">
            <i class="fas fa-user-graduate float-left"></i>
            <p class="card-text text-white">${data.getRole()}</p>
          </div>
        </div>
        <div class="container p-3 bottom-border-custom bg-gray-custom">
          <ul class=" bg-white list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>
      </div>`;
};

const formatNumber = (number) => {

  //RegEx to remove all non-numeric characters
  // split into an array
  let numArr = number.replace(/\D/g,'').split('');
  
  //Strip first number if it is a 1
  if(numArr[0] === '1'){
    numArr.shift();
  }
  
  //Format numbers to be in the example format
  //Exampe Format '(555) 555-5555'
  numArr.splice(0,0,'(');
  numArr.splice(4,0,') ');
  numArr.splice(8,0,'-');

  //Convert back to a string
  clearNum = numArr.join('');

  return clearNum;
}

//Run the createHTML fucntion to generate the Cards
//Passing the responses from the Inquirer in index.js
const createHTML = (data) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Team Card Builder Node JS</title>
</head>
<body>

  <header class='bg-red-custom p-4'>
      <h1 class='text-center'>Team Card Builder</h1>
      <h2 class='text-center'>Node JS</h2>
  </header>

  <main class='container p-4'>
    <div class="row justify-content-center">
      ${generateCards(data)}
    <div>
  </main>
</body>
</html>`;
};

module.exports = createHTML;
