import { convertToMultidimensionalStringArray } from '../puzzleInputs'
import { peek } from '../util/function'
import { sum, sortNumbers } from '../util/math'
const pairLookup = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
    '<': '>',
    '>': '<',
}
const closeLookup = {
    '}': '{',
    '>': '<',
    ']': '[',
    ')': '(',
}
const pointsLookup = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}

const isClosingBracket = str => closeLookup[str] !== undefined

export const puzzleA = input => {
    const arr = convertToMultidimensionalStringArray(input, '\n', '')
    const endStack = []
    for (const codeLine of arr) {
        let stack = []
        for (const codeChar of codeLine) {
            if (isClosingBracket(codeChar)) {
                if (peek(stack) === pairLookup[codeChar]) {
                    stack.pop()
                } else {
                    endStack.push(pointsLookup[codeChar])
                    break
                }
            } else {
                stack.push(codeChar)
            }
        }
    }
    return sum(endStack)
}

const newPointsLookup = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
}
export const puzzleB = input => {
    const arr = convertToMultidimensionalStringArray(input, '\n', '')
    let incompleteLines = []
    for (const codeLine of arr) {
        let stack = []
        let corrupted = false
        for (const codeChar of codeLine) {
            if (isClosingBracket(codeChar)) {
                if (peek(stack) === pairLookup[codeChar]) stack.pop()
                else {
                    corrupted = true
                    break
                }
            } else {
                stack.push(codeChar)
            }
        }
        if (stack.length > 0 && !corrupted) incompleteLines.push(stack.reverse())
    }
    let sorted = sortNumbers(
        incompleteLines.map(curr => curr.map(transformChunk).reduce(reduceChunk, 0)),
    )
    return sorted[Number.parseInt(sorted.length / 2)]
}
const transformChunk = str => pairLookup[str]

const reduceChunk = (sum, curr) => {
    let result = sum * 5
    result += newPointsLookup[curr]
    return result
}
