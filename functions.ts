// Functions
function getSum(num1: number, num2: number) {
    return num1 + num2
}

// console.log(getSum(2, 4))

const mySum = (num1: number, num2: number): number => {
    return num1 + num2
}

// console.log(mySum(4, 6))

function getName(firstName: string, lastName?: string): string {
    if (lastName === undefined) {
        return 'Hi ' + firstName
    }
    return 'Hello ' + firstName + ' ' + lastName
}

// console.log(getName('John', 'Doe'))
// console.log(getName('John'))

function myVoid(): void {
    return
}
