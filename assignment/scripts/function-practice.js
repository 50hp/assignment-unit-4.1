console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

console.log('----- Q1 -----');
// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());





console.log('----- Q2 -----');
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
    console.log('in helloName');
  return `Hello, ${name} !`;
}
// Remember to call the function to test
console.log(helloName('Isaac'));





console.log('----- Q3 -----');
// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {

    return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
//Test Call
console.log(addNumbers(1,3));





console.log('----- Q4 -----');
// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thridNumber ) {

    return firstNumber * secondNumber * thridNumber;
}
//Test Call
console.log(multiplyThree(3,4,5));





console.log('----- Q5 -----');
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
//Test Call
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );





console.log('----- Q6 -----');
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
    if ( array === undefined) {
        return array;
    }
    else {
        return array[array.length - 1];
    }

}
//Test Call
console.log(getLast(['pizza', 'hotdogs', 'ribs', 'cake']));
console.log(getLast());





console.log('----- Q7 -----');
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
    for (let i=0; i<(array.length); i++) {
        if ( value === array[i] ) { 
            return true;
        }
     }
        return false;
    
}
//Test Call
console.log(find('Isaac', ['Isaac','Joe','will']));
console.log(find( 7, [1,2,3,4,5,6] ));





// ----------------------
// Stretch Goals
// ----------------------
console.log('----- Q8 -----');
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    console.log('in isFirstLetter');
    if(letter === (string[0])) {
        return true;
    }else {
        return false;
    }
}
//Test Call
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );





console.log('----- Q9 -----');
// 9. Function to return the sum of all numbers in an array
function sumAll( arr ) {
    console.log('in sumAll');
    console.log( arr.length );
    let arrLength = arr;
    let sum = 0
    // TODO: loop to add items
    for(let i = 0; i < ( arrLength.length ); i++ ) {
        sum = sum + ( arr[i] );
        console.log( sum );

    }
  return sum;
}
//Test Call
console.log(sumAll([1,2,3,4,5,6,7,8]));




console.log('----- Q10 ----');
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function posArray( arr ) {
    console.log( 'in posArray' );
    let arrLength = arr;
    let posArray = [];
    for(let i = 0; i < ( arrLength.length ); i++) {
        
          if ( arrLength[i] > 0 ) {
              posArray.push(arrLength[i]);
          }

    }

    return posArray;


}
//Test Call
console.log(posArray( [1,-1,0,5,-4,-10,3,2] ));




console.log('----- Q11 ----');
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
