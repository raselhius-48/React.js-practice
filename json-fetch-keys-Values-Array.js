

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
