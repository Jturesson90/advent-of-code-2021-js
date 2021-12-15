import { convertToStringArray } from '../puzzleInputs'
import { incrementKey, getMinMaxValue } from '../util/function'
export const puzzleA = input => {
    const { lookup, start } = parseInput(input)
    const steps = 10
    return calculate({ lookup, steps, start })
}

export const puzzleB = input => {
    const { lookup, start } = parseInput(input)
    const steps = 40
    return calculate({ lookup, steps, start })
}

function calculate({ lookup, start, steps }) {
    let pairs = {}
    const arr = start.split('')
    for (let i = 0; i < arr.length - 1; i++) {
        const pair = arr[i] + arr[i + 1]
        pairs = incrementKey(pairs, pair)
    }
    for (let step = 0; step < steps; step++) {
        let newPairs = {}
        for (const [key, value] of Object.entries(pairs)) {
            const c1 = key[0]
            const c2 = key[1]
            if (lookup[key]) {
                const x = lookup[key]
                newPairs = incrementKey(newPairs, `${c1}${x}`, value)
                newPairs = incrementKey(newPairs, `${x}${c2}`, value)
            } else {
                newPairs = incrementKey(newPairs, `${c1}${c2}`, value)
            }
        }
        pairs = newPairs
    }
    let count = {}
    for (const [key, value] of Object.entries(pairs)) {
        for (let i = 0; i < 2; i++) {
            count = incrementKey(count, key[i], value)
        }
    }

    const [min, max] = getMinMaxValue(count)

    return Math.ceil(max / 2) - Math.ceil(min / 2)
}

function parseInput(input) {
    const a = convertToStringArray(input, '\n\n')
    const lookup = convertToStringArray(a[1], '\n').reduce((prev, a) => {
        const b = a.split(' -> ')
        return { ...prev, [b[0]]: b[1] }
    }, {})

    return { lookup, start: a[0] }
}
