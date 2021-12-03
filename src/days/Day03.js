import { convertToStringArray } from '../puzzleInputs'
export const puzzleA = input => {
    let a = convertToStringArray(input)
    let b = []
    if (!Array.isArray(a)) return 0

    for (let i = 0; i < a.length; i++) {
        const element = a[i]
        for (let j = 0; j < element.length; j++) {
            const binary = element[j]
            if (!b[j]) b[j] = []
            b[j].push(Number.parseInt(binary))
        }
    }
    let c = b.map(val => (val.filter(bin => bin === 1).length > val.length / 2 ? 1 : 0))
    let d = c.map(val => (val === 0 ? 1 : 0)).join('')
    let e = c.join('')
    const gamma = Number.parseInt(e, 2)
    const epsilon = Number.parseInt(d, 2)
    return gamma * epsilon
}

export const puzzleB = input => {
    let a = convertToStringArray(input)
    const oxygen = calc(a, 0, (ones, len) => (ones >= len ? '1' : '0'))
    const CO2 = calc(a, 0, (ones, len) => (ones < len ? '1' : '0'))
    return oxygen * CO2
}
const calc = (arr, index, callbackFn) => {
    if (!Array.isArray(arr)) return 0
    if (arr.length === 1) {
        const decimal = Number.parseInt(arr.join(''), 2)
        return decimal
    }
    const len = arr.length / 2
    const onesNum = arr.filter(a => a[index] === '1').length
    const chosenNumber = callbackFn(onesNum, len)
    const filteredArray = arr.filter(a => a[index] === chosenNumber)
    return calc(filteredArray, index + 1, callbackFn)
}
