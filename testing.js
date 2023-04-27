let discounted = []
// let finalPrice = 0
var prices = [100,200,300]
var discount = 0.5

for(let i = 0; i < prices.length; i++){
    const discountedPrice = prices[i] * (1-discount);
    // finalPrice = Math.round(discountedPrice * 100)/100
    discounted.push(discountedPrice)
    // console.log(discountedPrice)
}

console.log(discounted)

let student = {
    'name': 'hi'
}

console.log(3 + null)
console.log('3' + null)
console.log(false + null)
console.log('3' + undefined)
console.log('3' - undefined)
console.log(true === Boolean(2))