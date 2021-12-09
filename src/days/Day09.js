import * as _ from 'lodash'
import { convertToMultidimensionalNumberArray } from '../puzzleInputs'
import { sum, addEach, take, sumMultiply, sortNumbers, isInsideGrid, reverse } from '../util/math'

export const puzzleA = input => {
    const arr = convertToMultidimensionalNumberArray(input, '\n', '')
    const lowPoints = []
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (isLowest(row, col, arr)) {
                lowPoints.push(arr[row][col])
            }
        }
    }
    const b = addEach(lowPoints, 1)
    return sum(b)
}

export const puzzleB = input => {
    const arr = convertToMultidimensionalNumberArray(input, '\n', '')
    const basins = []
    const checkedCache = {}
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (checkedCache[`${row},${col}`]) continue
            const a = open(row, col, arr, checkedCache)
            if (a) basins.push(a)
        }
    }
    const sort = sortNumbers(basins)
    const rev = reverse(sort)
    const threeBiggest = take(rev, 3)
    const result = sumMultiply(threeBiggest)
    return result
}

function isLowest(row, col, arr) {
    const directions = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ]
    const number = arr[row][col]
    for (let i = 0; i < directions.length; i++) {
        const rowCheck = directions[i][0] + row
        const colCheck = directions[i][1] + col
        if (isInsideGrid(rowCheck, colCheck, arr.length, arr[0].length)) {
            const check = arr[rowCheck][colCheck]
            if (number >= check) return false
        }
    }
    return true
}

function open(row, col, arr, checkedCache = {}) {
    if (!isInsideGrid(row, col, arr.length, arr[0].length)) return 0
    if (checkedCache[`${row},${col}`]) return 0
    const number = arr[row][col]
    checkedCache[`${row},${col}`] = 1
    if (number === 9) return 0
    let sum = 0
    sum += open(row - 1, col, arr, checkedCache)
    sum += open(row, col - 1, arr, checkedCache)
    sum += open(row + 1, col, arr, checkedCache)
    sum += open(row, col + 1, arr, checkedCache)

    return sum + 1
}
