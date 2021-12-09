export const triangleNumber = n => (Number.isInteger(n) ? (n * (n + 1)) / 2 : 0)

export const factorial = (num, cache = {}) => {
    if (cache[num] !== undefined) return cache[num]
    if (num < 0) return -1
    else if (num == 0) return 1
    return (cache[num] = num * factorial(num - 1, cache))
}

export const count = arr => value => arr.reduce((sum, item) => (item === value ? sum + 1 : sum), 0)
export const addEach = (arr, amount) => arr.map(val => val + amount)
export const sum = arr => arr.reduce(add, 0)

function add(accumulator, a) {
    return accumulator + a
}
function multiply(accumulator, a) {
    return accumulator * a
}
export const take = (arr, n) => {
    return arr.slice(0, n)
}
export const sumMultiply = (arr, n) => {
    return arr.reduce(multiply, 1)
}
export const sortNumbers = arr => {
    return arr.sort((a, b) => a - b)
}
export const isInsideGrid = (row, col, rowLength, colLength) =>
    row > -1 && row < rowLength && col > -1 && col < colLength

export const reverse = arr => arr.reverse()
