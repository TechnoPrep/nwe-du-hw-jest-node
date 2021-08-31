const formatNumber = (number) => {

    // RegEx to remove all non-numeric characters
    // split into an array
    let numArr = number.replace(/\D/g,'').split('');
    
    // Strip first number if it is a 1
    if(numArr[0] === '1'){
      numArr.shift();
    }
  
    len = numArr.length;

    console.log(len);
    
    // Format numbers to be in the example format
    if(len === 10){
      // Exampe Format if 10 digit number '(555) 555-5555'
      numArr.splice(0,0,'(');
      numArr.splice(4,0,') ');
      numArr.splice(8,0,'-');
    } else if(len === 7){
      // Exampe Format if 7 digit number '555-5555'
      numArr.splice(3,0,'-');
    } else {
      // Else return the original Input as the Number is bad
      return number;
    }
  
    // Convert back to a string
    clearNum = numArr.join('');
  
    return clearNum;
  }
  
let testNum1 = '+1555-555-5555'
let testNum2 = '+1555-5555'
let testNum3 = 'test'

console.log(formatNumber(testNum1));
console.log(formatNumber(testNum2));
console.log(formatNumber(testNum3));