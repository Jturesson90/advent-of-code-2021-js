export function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
export function removeItem(arr, value) {
    const index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}
export const peek = arr => (arr.length >= 0 ? arr[arr.length - 1] : null)
export const hasDuplicates = array => {
    return new Set(array).size !== array.length
}
export function createAndFillTwoDArray({ rows, columns, defaultValue }) {
    return Array.from({ length: rows }, () => Array.from({ length: columns }, () => defaultValue))
}
export const getMax = (arr, key) =>
    arr.reduce((prev, curr) => {
        const val = key !== undefined ? curr[key] : curr
        return val > prev ? val : prev
    }, 0)

export const incrementKey = (pairs, key, value = 1) => ({
    ...pairs,
    [key]: (pairs[key] ?? 0) + value,
})
export const getMinMaxValue = (obj = {}) => {
    let min = Number.MAX_VALUE
    let max = 0
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key]
            min = Math.min(min, value)
            max = Math.max(max, value)
        }
    }
    return [min, max]
}
