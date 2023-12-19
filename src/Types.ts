// Typescript Types

// String
const variable: string = "Hello";

// Booleans
const isTrue: boolean = true;

// Numbers
const num: number = 12;

// Union Types
const stringOrNumber: string | number = "Hello";

// Arrays

// String Array
const stringArr: string[] = ["A", "B", "C"]

// Number Array
let numsArr: number[];
numsArr = [1, 2, 3];
numsArr = [1, 3, 5];

// Union Array
const mixedArr: (string | number)[] = ["Ankara", 5, 6213, "Istanbul"];


// Objects
const user = {
    username: "Melo",
    age: 26,
    isAdmin: false
}
user.age = 27;

// Create Object With Types
let userObj: {
    username: string
    age: number
    isAdmin: boolean
}

// We have to fill all properties here
// eslint-disable-next-line prefer-const
userObj = {
    username: "Genesis",
    age: 16,
    isAdmin: true
}


// Create Object With Optional Types
let userObjOptional: {
    username: string
    age: number
    isAdmin: boolean
    phone?: string // This field is optional and can be left blank
}

// eslint-disable-next-line prefer-const
userObjOptional = {
    username: "Helo",
    age: 35,
    isAdmin: false
}

// We can add or not, totally up to us!
userObjOptional.phone = "+90564121579";



// Alternatively We Can Initialized The Object with Types
// Create Object With Optional Types
const userObjOptionalAlternative: {
    username: string
    age: number
    isAdmin: boolean
    phone?: string // This field is optional and can be left blank
} = {
    username: "Helo",
    age: 35,
    isAdmin: false
}


// Anytype
// Definitely be careful with this one, we use TS for exactly giving a type!
let anyType;
// let anyType: unknown; // Use this instead!

anyType = 12;
anyType = "12";
anyType = true;
anyType = {};
anyType = [true, 1];

// Any Type Array
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let anyTypeArr: any[];
// eslint-disable-next-line prefer-const
anyTypeArr = [1, "asd", false, []];


// Just to Surpress the eslint warning :)
console.log(
    anyTypeArr,
    anyType,
    userObjOptionalAlternative,
    user,
    userObj,
    mixedArr,
    stringOrNumber,
    numsArr,
    num,
    stringArr,
    variable,
    isTrue,
    userObjOptional
);