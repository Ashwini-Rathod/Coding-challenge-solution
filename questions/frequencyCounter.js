/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
   let obj;
   if(checkStr(str)){
      let arr = [];
      for(let i = 0; i< str.length; i++){
         if(str.match(/[aeiouAEIOU]/)){
            arr.push(str[i]);
         }
      }
      let a = arr.filter((elem) =>{
         return elem.match(/a/i);
      })
      let e = arr.filter((elem) =>{
         return elem.match(/e/i);
      })
      let i = arr.filter((elem) =>{
         return elem.match(/i/i);
      })
      let o = arr.filter((elem) =>{
         return elem.match(/o/i);
      })
      let u = arr.filter((elem) =>{
         return elem.match(/u/i);
      })
      obj = {
         a: a.length,
         e: e.length, 
         i: i.length,
         o: o.length,
         u: u.length,
      }
      return obj;
   }
   else{
      throw new Error("Invalid Input");
   } 
};
const checkStr = (str) => {
   return typeof str == "string";
}
module.exports = frequencyCounter;
