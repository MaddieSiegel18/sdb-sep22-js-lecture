// Javascript one-line comment cntrl-/ 

/* multi line comment in JS alt-shift-a 

JS founded in 1996
client side language (runs in the browser)
interpreted, not compiled
first-class function (functions are treated like variables)
prototype-based object oriented
ECMAScript is an organization setting language standards
*/
// comments

/* 
comments are blocks of code that aren't being interpreted. 
denoted by // for single line 
denoted by /* for multi
comments are read by parser but not executed
*/

/* 
JS Data types
    primitive
        string
        number
        boolean
        null
        undefined
    Reference
        array
        object    
 */


        /* string
        primitieve data type representing characters (text)
        enclosed in "" or ''
        examples:
        */
console.log (2 + 2)

console.log (2 + 3)

console.log ("text")

console.log ("this is a text")
console.log ('This is also a text')
console.log ('THis is a text as well 2+17')
console.log(typeof "text")
console.log(typeof true)

// we can add (concatenate) strings
console.log("Paul" + "Niemczyk")

// Strings are immutable but their characters are indexed, beginning at 0.
console.log("paul" + "niemczyk[0]")

// String interpolation
// a process of inclus=ding a space within a string that will execute code

// string and number cocatenation example. notice type coercion of 2 and 2... because they're preceded by a string.
console.log("the sum of two and two is:", 2 + 2, ".")


// string interpolation example
console.log('the sum of two and two is ${2+2}. Five plus three is ${5+3}')

// multi line strings
// done using character "\n"
console.log("This string is \\multiline.")

// typeof operator -returns data type

// operators

/* 
addition (+)
subtraction (-)
multiplication (*)
division (/)
exponent (**)
dot (.)
asignment (=)
comparison (==)
strict comparison (===)
*/
/*  
 assignment- assigns something to something (ex value to a variable)
let myname= "paul"
console.log(myname)
Comparison: traditional equal sign.  checks if left and right values are equal, not caring about data types.
console.log(5==7) returns false
strict comparison- checks for values and data type.
console.log(5=="5") returns true bc of type coercion. 
console.log(5==="5") returns false. values identical but data types different int!===string)
*/

// expressions- unprocessed values within () covered in conditionals. 



