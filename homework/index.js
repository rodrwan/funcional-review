exports.factorial = (n) => (n < 1) ? 1 : n * exports.factorial(n - 1)

exports.fibonacci = (n) => (n <= 1) ? 1 : exports.fibonacci(n - 2) + exports.fibonacci(n - 1)

exports.divide = (a, b) => {
    if (b === 0) {
        return 0
    } else if (a - b === 0) {
       return 1
    } else if ( a < b) {
       return 0
    }

    return 1 + exports.divide(a - b, b)
}

exports.invert = (n) => (n < 10) ?
    n : (n % 10) * parseInt(Math.pow(10, parseInt(Math.log10(n), 10), 10)) + exports.invert(parseInt(n/10), 10)

exports.suma = (n) => (n === 0) ? n : n%10 + exports.suma(parseInt(n/10, 10))

exports.multi = (a, b) => (a === 1) ?
    b : (a%2 !== 0) ?
        b + exports.multi(parseInt(a/2, 10), b*2) : exports.multi(parseInt(a/2, 10), b*2)

exports.sumArr = (arr) => (!arr.length) ? 0 : arr[0] + exports.sumArr(arr.slice(1))
