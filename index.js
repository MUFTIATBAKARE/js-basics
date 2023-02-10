// the question is a bit confusing, so i did it three ways
// method 1 - Using variable
// let a; 
// let b;
// a = 40;
// b = 3;
// let multiplyNumber = (a * b);
// console.log(multiplyNumber);

// // method 2 -declaring a function but without parameter(s)

// function numberMultiply() {
//     console.log(40*3)
// }
// numberMultiply();

// method3
function numberMultipl(number1, number2) {
    console.log(number1 * number2);
}
numberMultipl(60, 3);
numberMultipl(6, 50);
numberMultipl(98, 6);

const numberMulti = function number(number1, number2) {
    return number1 * number2;
};
console.log(numberMulti(6,3));
console.log(numberMulti(15,30));

let firstName = "Muftiat "
let lastName = "Bakare Abdullahi"
let stuternTrack = "FrontEnd"
let mySkills = "Html, CSS, JavaScript"
let favoriteColor = "Blue"
let countryIndependence = "1960"
 
console.log("My name is " + firstName + lastName + ". I am a " + stuternTrack + " developer" + ". You can ask me about " + mySkills + ". My fav color is " + favoriteColor + ". I am a Nigerian and Nigeria got her independence in " + countryIndependence + ". Nice to meet you!");

// or

console.log(`My name is ${firstName} ${lastName}. I am a ${stuternTrack}  developer. You can ask me about ${mySkills}. My fav color is ${favoriteColor}. I am a Nigerian and Nigeria got her independence in ${countryIndependence}. Nice to meet you!`);