// A
// const superheroes = [
//     { name: "Batman", alter_ego: "Bruce Wayne" },
//     { name: "Superman", alter_ego: "Clark Kent" },
//     { name: "Spiderman", alter_ego: "Peter Parker" }]

// const findSpiderMan = function (superheroes) {
//     return superheroes[2];
// }

// console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// // B
// const doubleArrayValues = function (array) {
//     let newArray = [];
//     array.forEach(number => {
//         newArray.push(number * 2);
//     });
//     return newArray;
// };
// console.log(doubleArrayValues([1, 2, 3]))

// const doubleArrayValuesArrow = function (array) {
//     return array.map(number => {
//         return number * 2;
//     });
// };
// console.log(doubleArrayValuesArrow([1, 2, 3]))

// const doubleArrayValuesArrow = function (array) {
//     return array.map(number => number * 2);
// };
// console.log(doubleArrayValuesArrow([1, 2, 3]))

// const doubleArrayValuesArrow = (array) => array.map(number => number * 2);

// console.log(doubleArrayValuesArrow([1, 2, 3]))

//  C
// const containsNumberBiggerThan10 = function (array) {
//     return array.some(number => {
//         return number > 10;

//     })
// }

// const containsNumberBiggerThan10 = (array) => array.some(number => number > 10)

// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))

// D
// const isItalyInTheGreat7 = (array) => array.includes('Italy');

// console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// // result should be true

// E
// const tenfold = (array) => array.map(number => number * 10);

// const tenfold = function (array) {
//     const newArray = [];
//     array.forEach(number => {
//         newArray.push(number * 10);
//     });
//     return console.log(newArray);
// };

// tenfold([1, 4, 3, 6, 9, 7, 11])
// result should be [10, 40, 30, 60, 90, 70, 110]

// F
// const isBelow100 = (array) => array.every(number => number < 100);

// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
//   // result should be: false

// G
// const bigSum = function (array) {
//     return array.reduce((a, b) => {
//         return a + b;
//     });
// }

const bigSum = (array) => array.reduce((a, b) => a + b);

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118





