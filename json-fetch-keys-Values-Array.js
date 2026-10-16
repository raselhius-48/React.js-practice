

// 1 Json 
const student = {
    Name: 'Sakib khan',
    age: 32,
    movies: ['king bkhan', 'Dhakar Mastan']
}

const stringjson = JSON.stringify(student)
console.log(stringjson)
const parseJson = JSON.parse(stringjson)
console.log(parseJson)


// 2 fetch
fetch('url')
    .then(res => res.JSON())
    .then(data => console.log(data))

// 3.keys
const keys = Object.keys(student);
console.log(keys)

// 4. values
const values = Object.values(student);
console.log(values)


// for 
const numbers = [23, 54, 45, 30, 60, 78]
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2)

// for of on array like object 
// loop on an object using for in

const products = [
    { name: 'laptop', price: 32000, brind: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brind: 'HTc', color: 'goldren' },
    { name: 'watch', price: 3000, brind: 'Casio', color: 'yellow' },
    { name: 'sungal', price: 3200, brind: 'ray', color: 'silver' },
    { name: 'laptop', price: 3000, brind: 'ribon', color: 'black' },
    { name: 'camra', price: 9000, brind: 'canon', color: 'gray' }
];
const newproduct = { name: 'webcam', price: 700, brand: 'lal' };

// copy products array and then add newproduct
const newproducts = [...products, newproduct];




