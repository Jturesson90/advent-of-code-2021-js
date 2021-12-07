import { convertToNumberArray } from '../puzzleInputs'
import { triangleNumber } from '../util/math'

export const puzzleA = input => {
    const numberArray = convertToNumberArray(input, ',').sort((a, b) => a - b)
    const max = Math.max(...numberArray)

    const steps = new Array(max + 1).fill(0)
    numberArray.forEach(n => steps[n]++)
    let lastOne = -1
    let result = 0
    let i = 0
    while (i++ < max) {
        let b = 0
        for (let j = 0; j < steps.length; j++) {
            b += Math.abs(i - j) * steps[j]
        }
        if (lastOne === -1) {
            lastOne = b
        } else if (lastOne < b) {
            result = lastOne
            break
        }
        lastOne = b
    }
    return result
}

export const puzzleB = input => {
    const numberArray = convertToNumberArray(input, ',').sort((a, b) => a - b)
    const max = Math.max(...numberArray)

    const steps = new Array(max + 1).fill(0)
    numberArray.forEach(n => steps[n]++)
    let lastOne = -1
    let result = 0
    const cache = {}
    let i = 0
    while (i++ < max) {
        let b = 0
        for (let j = 0; j < steps.length; j++) {
            b += triangleNumber(Math.abs(i - j), cache) * steps[j]
        }
        if (lastOne === -1) {
            lastOne = b
        } else if (lastOne < b) {
            result = lastOne
            break
        }
        lastOne = b
    }
    return result
}
