const rotateString = (str, n, direction) => {
  let arr =[];
  if(checkStr(str) && checkNum(n) && checkDir(direction) ){
    arr = (str.split(""));
    let result;
    if(direction == "right"){
        for(let i = 0; i< n; i++){
         let a = arr.pop();
         arr.unshift(a);
         result = arr.join("");
        
        }
        return result;
    }
    else if(direction == "left"){
      for(let i = 0; i< n; i++){
        let a = arr.shift();
        arr.push(a);
        result = arr.join("");
       
       }
       return result;
    }
  }
};
const checkStr = (str) =>{
  if(typeof str == "string"){
    return true;
  }
  else{
    throw new Error("Invalid Input");
  }
}
const checkDir = (dir) => {
  if(dir == "right" || dir == "left"){
    console.log("true");
    return true;
  }
  else{
    throw new Error("Invalid Direction");
  }
}
const checkNum = (num) =>{
  if(typeof num == "number"){
    return true;
  }
  else{
    throw new Error("Invalid Input");
  }
}
rotateString("Ashwini" , 2, "left");
module.exports = rotateString;
