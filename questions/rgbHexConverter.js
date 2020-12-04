/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    let a;
    if(checkInput(...rgbValues) && moreInput(...rgbValues) && checkAlpha(...rgbValues)){
        a = "#" + ((1<<24) + (rgbValues[0] << 16) + (rgbValues[1]<< 8) + rgbValues[2]).toString(16).slice(1);
        return a;
    }
    else{
        throw "Invalid Input";
    }
};
const moreInput = (...arr) =>{
    return arr.length == 3;
}
const checkAlpha = (...arr) =>{
    return arr.every((elem) => {
        return typeof elem == "number";
    })
}
const checkInput = (...arr) =>{
    return arr.every((elem) => {
        return elem>= 0 && elem <=255;
    })
}

module.exports = rgbToHexConversion;
