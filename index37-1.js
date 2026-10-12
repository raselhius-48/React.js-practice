// 1.how to declare a variable using let and const
const FatherName = 'abu siddik';
let seation = 'rainy';
seation = 'winter';

// 2.condition 
// 6 basic condition : >,< , ===, <=, >= ,multiple condition && , || , 
if (FatherName === 'abu siddik' || seation === 'rainy') {

}
else if () {

}
else {

}

// 3.array declare
// indexe, length.push

const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5.function  

function multiple(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiple(10, 5)

console.log(output);

//  6. object 
const student = {
    name: 'Salib khan'
    age: 32,
    movies: ['king khan', 'Dhakar Master']
}
//  3 ways to access proberty by name 
console.log(student.age); //direct by property 
console.log(student['age']); //access via property name string
const my variable = 'age';
console.log(student.[variable]); // access via property name in a variable


1. // template String
const numbers = [89, 35, 98, 12]
const student = {
    name: 'Salib khan'
    age: 32,
    movies: ['king khan', 'Dhakar Master']
}
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked moves ${student.moves[0]}`;

console.log(about)

// 2. arrow function
// type 1-> whithout paramitter
const getFiftyFive = () => 55;
// type 2-> parametter including
const AddSixtyFive = num => num + 65;
// type-3
const isEven = x => x % 2 == 0;
// type:-4
const AddThree = (x, y, z) => x + y + z;
// type-5
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
doMath(45, 50);





