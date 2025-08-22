

function test(numbers) {
    let product = 1
    for (i = 0; i < numbers.length; i++) {
        product *= numbers[i]
    }
    return product
}

let numbers = [1,2,3,7,1]

console.log(test(numbers))