// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(2, 4))
var mySum = function (num1, num2) {
    return num1 + num2;
};
// console.log(mySum(4, 6))
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return 'Hi ' + firstName;
    }
    return 'Hello ' + firstName + ' ' + lastName;
}
// console.log(getName('John', 'Doe'))
// console.log(getName('John'))
function myVoid() {
    return;
}
