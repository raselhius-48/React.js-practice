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