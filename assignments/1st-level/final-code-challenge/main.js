

// Write a function called `largestNumber` that takes 3 numbers and returns the largest number.
// Test with the following:
// 

function largestNumber(num1, num2, num3){
    return Math.max(num1, num2, num3);
    
}
console.log(largestNumber(3, 8, 9))
console.log(largestNumber(25,-10, 10))
// largestNumber();

const names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }
names.push(person.firstName)
console.log(names)