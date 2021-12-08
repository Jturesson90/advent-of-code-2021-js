export const triangleNumber = n => (Number.isInteger(n) ? (n * (n + 1)) / 2 : 0)

export const factorial = (num, cache = {}) => {
    if (cache[num] !== undefined) return cache[num]
    if (num < 0) return -1
    else if (num == 0) return 1
    return (cache[num] = num * factorial(num - 1, cache))
}
