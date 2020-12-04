/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if(checkNum(seconds)){
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - (3600*hours))/60);
        let secs = (seconds - (3600*hours) - (minutes*60));
        let time ={
            hours: hours,
            minutes: minutes,
            seconds: secs,
        }
        return time;
    }
    else{
        throw new Error("Invalid Input");
    }
};
const checkNum = (num) =>{
    return typeof num == "number";
}
module.exports = convertTime;
