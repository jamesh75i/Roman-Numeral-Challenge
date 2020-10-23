

let number = num;
let thousands = Math.floor(number / 1000) * 1000;
let hundreds = Math.floor(number % 1000 / 100) * 100;
let tens = Math.floor(number% 100 / 10) * 10;
let units = number % 10;



// //1, 5, 10, 50, 100, 500, 1000 
let array =["I", "V", "X", "L", "C", "D", "M"];

let numeral = ""; 

getNumber(thousands);
getNumber(hundreds);
getNumber(tens);
getNumber(units);

function getNumber(num){
    switch(num){
        case 0:
            //do nothing
            break; 
        case 1:
        case 2:
        case 3:
            numeral += array[0].repeat(units);
            break;
        case 4:
            numeral += array[0] + array[1];
            break;
        case 5:
            numeral += array[1];
            break;
        case 6:
        case 7:
        case 8: 
            numeral += array[1] + array[0].repeat(units - 5);
            break;
        case 9:
            numeral += array[0] + array[2];
            break;
        case 10:
        case 20:
        case 30: 
            numeral += array[2].repeat(tens / 10);
            break; 
        case 40:
            numeral += array[2] + array[3];
            break;
        case 50:
            numeral += array[3];
            break;
        case 60:
        case 70:
        case 80:
            numeral +=  array[3] + array[2].repeat((tens % 50) /10)
            break;
        case 90:
            numeral += array[2] + array[4];
            break;
        case 100:
        case 200:
        case 300:
            numeral += array[4].repeat(hundreds / 100);
            break;
        case 400:
            numeral += array[4] + array[5];
            break;
        case 500:
            numeral += array[5];
            break;
        case 600:
        case 700:
        case 800:
             numeral += array[5] + array[4].repeat((hundreds - 500) / 100);
             break;
        case 900:
            numeral += array[4] + array[6];
            break;
        case 1000:
        case 2000:
        case 3000:
            numeral += array[6].repeat(thousands / 1000);
        default:
            break;
    }

}




if(thousands === 0 && hundreds === 0 && tens === 0){
    //Single digit number
    numeral = getNumber(units);
}
else if(thousands === 0 && hundreds === 0){
    //Double digit
    numeral = getNumber(tens) + getNumber(units);
}
else if(thousands === 0){
    //Hundreds 3 digits
    numeral = getNumber(hundreds) + getNumber(tens) + getNumber(units);
}
else{
    //Thousands 
    numeral = getNumber(thousands) + getNumber(hundreds) + getNumber(tens) + getNumber(units);
}

let array =["I", "V", "X", "L", "C", "D", "M"];


function convertToRoman(num) 
{
    let len = "";
    len = num;
    let numeral = ""
    let number = num;
    let thousands = Math.floor(number / 1000) * 1000;
    let hundreds = Math.floor(number % 1000 / 100) * 100;
    let tens = Math.floor(number % 100 / 10) * 10;
    let units = number % 10;
    
    numeral = getNumber(thousands) + getNumber(hundreds) + getNumber(tens) + getNumber(units);
    return numeral;
}





 convertToRoman(12);