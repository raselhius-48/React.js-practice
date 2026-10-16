
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


// object destructuting 
// type-1
const { name, age } = { name: 'alu', age: 14 }
const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 }

// type --2
const employee {
    ide:'VS Code',
    designation:'developer',
    machine:'mac',
    languase: ['html', 'css', 'js']
    specification = {
        height: 66,
        weight: 67,
        address: 'kumar khali',
        drink: 'water'
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }

    }
}
const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification.watch





