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



// FUNCTIONS

const sayHi = () => {
    console.log("Hi, ");
}
sayHi();


// Functions return a string
const funcReturnString = (): string => {
    console.log("Hi, ");
    return "Genesis Codemy!";
}

const word: string = funcReturnString();
console.log(word);



// Passing Arguments in to Functions
// These two are exatly the same
const multiple = (num: number) => {
    return num * 2;
}
const multiple2 = (num: number): number => {
    return num * 2;
}
const multiple3 = (num: number): void => {
    // Do something but don't return anything
    num + 1;
}

multiple(2);
multiple2(3);
multiple3(3);



// Optional Parameters for a Function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2 + (another || 0);
}

// Default value
const sum2 = (num1: number, num2: number, another: number = 0) => {
    return num1 + num2 + another;
}

sum(1, 2);
sum(1, 2, 123);

sum2(1, 2);
sum2(1, 2, 5);





// TYPE ALIASES

// This is okay but too long! So we can use type aliases
const funcTry = (user: { username: string, age: number, phone?: string }) => {
    console.log(user.username);
}

funcTry({ username: "string", age: 12 });


//-------------------

// We can create our custom type and use it as function parameter
type UserType = {
    username: string;
    age: number;
    phone?: string;
}

const betterFunction = (user: UserType) => {
    console.log(user.age)
    console.log(user.username)
    console.log(user?.phone)
}

const user2: UserType = {
    username: "Melo",
    age: 1453,
    phone: "+90 542 154 87 93"
};
betterFunction(user2);



// Creating A Prototype of a Function
// Using that prototype, we can create different Functions
type myFuncPrototype = (a: number, b: string) => void

// We used the function prototype to create a new function
const write: myFuncPrototype = (num, str) => {
    console.log(num + " times " + str);
}

write(1, "A");

// Another Example
type UserType2 = {
    username: string;
    age: number;
    phone?: string; // optional
    theme: "dark" | "light" // Can be only these two values
}

const userWithTheme: UserType2 = {
    username: "Meloo",
    age: 43,
    theme: "dark"
    // theme: "pink" // Cannot be possible!
}
console.log(userWithTheme);



// INTERFACES, Advanced version of Types


// We don't put "=" here like we do in "type"
/* Let's say we have two types of users
    -> Customers
    -> Employees
    We can use our same interface to these two types
*/
interface IUser {
    username: string;
    email: string;
    age: number;
}

// This has everything that IUser has but also adds "customerId" additionally
// We can add whatever we want to extend IUser interface
interface ICustomer extends IUser {
    customerId: number;
}

const customer: ICustomer = {
    username: "Corç",
    age: 45,
    email: "corc@gmail.com",
    customerId: 125123
}
console.log(customer);

const user3: IUser = {
    username: "Corç",
    age: 45,
    email: "corc@gmail.com",
}
console.log(user3);


// Using Interfaces & Types depends on your project
// Don't be confused, if you need to extend any type
// just use Interfaces, else use Types