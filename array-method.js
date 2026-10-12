const products = [
    { name: 'laptop', price: 32000, brind: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brind: 'iphone', color: 'goldren' },
    { name: 'watch', price: 3000, brind: 'casio', color: 'yellow' },
    { name: 'sungal', price: 3200, brind: 'lenovo', color: 'silver' },
    { name: 'laptop', price: 3000, brind: 'ribon', color: 'black' },
    { name: 'camra', price: 9000, brind: 'canon', color: 'gray' }
];
const brands = products.map(pro => pro.brind);
console.log(brands);
const prices = products.map(product => product.price);
console.log("prices")

// forEach used system
// type 1
const brands = products.forEach(pro => console.log(pro));
console.log(brands);

// type 2
const prices = products.forEach(product => product.color);
console.log("prices")
// type 3
products.forEach(product => {

})

// filter
// type 1
const cheap = products.filter(product => product.price =< 5000);
console.log(cheap);

// type-2
const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName)

// 4.find
const special = products.find(b => b.name.includes('n'));
console.log(special)