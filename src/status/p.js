// Suppose you have a string date
var stringDate = "2024-05-27";
console.log(stringDate);
// Parse the string date into a Date object
var parsedDate = new Date(stringDate);
console.log(parsedDate);
// Get the current date
var currentDate = new Date();
console.log(currentDate);
// Now you can compare the two dates
if (parsedDate > currentDate) {
    console.log("The parsed date is in the future.");
} else if (parsedDate < currentDate) {
    console.log("The parsed date is in the past.");
} else {
    console.log("The parsed date is the same as the current date.");
}
