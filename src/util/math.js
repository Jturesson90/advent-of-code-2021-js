export const triangleNumber = (num, cache = {}) => {
    if (num === 1) return 1
    else if (num < 0) return -1
    else if (num === 0) return 0
    else if (cache[num] !== undefined) {
        return cache[num]
    } else {
        const a = num + triangleNumber(num - 1, cache)
        cache[num] = a
        return a
    }
}

export const factorial = (num, cache = {}) => {
    if (cache[num] !== undefined) {
        return cache[num]
    }
    if (num < 0) return -1
    else if (num == 0) return 1
    else {
        const a = num * factorial(num - 1, cache)
        cache[num] = a
        return a
    }
}
