
// 1. array-destructuring 
// type 1
const numbers = [42, 65]
const x = numbers[0];
const y = numbers[1];

// type-2 
const number2 = [42, 65]
const [x2, y2] = [42, 65]
console.log(x2, y2)

// type 3
const number3 = [42, 65]
const [x3, y3] = number3;
console.log(x3, y3)

// type - 4
const number4 = [42, 65]
const [x4, y4] = number4;
function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums;
}
const [frist, second] = [90, 34];
// or
const [frist, second] = boxify(90, 34);
// or
console.log(boxify(90, 34));

const student = {
    name: 'Rakib',
    age: 32,
    movies: ['king khan', 'Dhaker Mastan']
}

const [fristMovie, secondMovie] = student.movies;




