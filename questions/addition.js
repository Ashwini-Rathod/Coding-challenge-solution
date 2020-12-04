/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  if(empty(...numbers) && checkNum(...numbers)){
    let sum = numbers.reduce((result=0, n)=>{
      return result + n;
    });
    return sum;
  }
  else{
    throw new Error("Invalid Input");
  }
};
const checkNum = (...Numarr) => {
  return Numarr.every((num) => {
      return typeof num == "number";
  })
}
const empty = (...Numarr) => {
  return Numarr.length != 0;
}
module.exports = addition;
