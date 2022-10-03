// Variables

/* 
    Containers that store data in memory.
    - declaration
        * allows memory space to be reserved
        * declarations start let, var, or const
        * declarations cannot start with a number, or most characters other than $ or _
        * if no value is assigned, it's undefined
    - initilization
        * data value that is given to a variable declaration.
        * assigning it a value
        * can be any value or data type (str, int, array, fx, class, etc.)
        * can be reassigned (except for const)
*/

let firstName;
console.log(firstName)

let lastName = "Niemczyk"
console.log(lastName)

let age = 25
console.log(age)

console.log("----------------------")
console.log("Value of firstName before reassignment " + firstName)

// Reassignment
firstName = "Paul"
console.log(`Value of firstName after reassignment ${firstName}`)


// (a) (b)  (c)   (d)
var address = "123 Main St, Salem, MA"
console.log(address)
// (a) - keyword
// (b) - variable identifier
// (a) & (b) - variable declaration
// (c) - assignment operator
// (d) - value or initializer

const className = "SDB September 2022"
console.log(className)

// className = "New class" // TypeError: const cannot be reassigned

// console.log(`This is uppercase version of ${address.toUpperCase()}`)
// Below code console.logs ONLY what address would look like with .toUpperCase method acting on it.
console.log(address.toUpperCase())

// Below code reassigns the value of address variable to what .toUpperCase method returns when it acts on address value
address = address.toUpperCase()
console.log(address)

// Reassignment doesn't have to happen on original variable. What if we wanted a new variable that's a copy of the original variable but all uppercase?

let addressUC = address.toUpperCase()

console.log(addressUC)
let coolnumber = 1
coolnumber = coolnumber + 1
console.log(coolnumber)

let fname = "Mad";
let Lastname = "siegel";
let housenumber = 948;
let suitenumber = 8;
let street = "Hercules Dr.";
let city = "Colchester";
let state = "Vermont";
let postcode = "05446";

console.log(fname, Lastname, housenumber, street, suitenumber, city,state, postcode)

let AddressStamp= '${fname} ${Lastname} \n ${housenumber} ${street} \n ${suitenumber} \n ${city} ${state} ${postcode}'
console.log(AddressStamp)