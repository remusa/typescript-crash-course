let myString: string
let myNum: number
let myBool: boolean

myString = 'Hello, world!'
myNum = 21
myBool = true

console.log(myString)
console.log(myNum)
console.log(myBool)

// Arrays

// let strArray: string[]
// let numArray: number[]
// let boolArr: boolean[]

// or

let strArray: Array<string>
let numArray: Array<number>
let boolArray: Array<boolean>

strArray = ['Goodbye', 'world']
numArray = [0, 3.1416, 0xfddd]
boolArray = [true, false, true]

console.log(strArray)
console.log(numArray)
console.log(boolArray)

// Tuples

let strNumTuple: [string, number]

strNumTuple = ['Hello', 3]

console.log(strNumTuple)

// Void, null and undefined

let myVoid: void = null
let myNull: null = undefined
let myUndefined: undefined = null

console.log(myVoid)
console.log(myNull)
console.log(myUndefined)
