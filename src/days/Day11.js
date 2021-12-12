import { convertToMultidimensionalNumberArray } from '../puzzleInputs'
import { isInsideGrid } from '../util/math'

export const puzzleA = input => {
    const flashes = 100
    const arr = convertToMultidimensionalNumberArray(input, '\n', '')
    let arrayCopy = arr.map(a => a.slice())
    let result = 0
    for (let index = 0; index < flashes; index++) {
        const [next, flashesNbr] = step(arrayCopy)
        result += flashesNbr
        arrayCopy = next
    }

    return result
}
const directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
]
const step = arr => {
    let arrayCopy = arr.map(a => a.slice())
    for (let rowIndex = 0; rowIndex < arrayCopy.length; rowIndex++) {
        const row = arr[rowIndex]
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const element = row[colIndex]
            arrayCopy[rowIndex][colIndex] = element + 1
        }
    }
    let didFlash = true
    const alreadyFlashed = {}
    while (didFlash) {
        didFlash = false
        for (let rowIndex = 0; rowIndex < arrayCopy.length; rowIndex++) {
            const row = arrayCopy[rowIndex]
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const element = row[colIndex]
                if (element > 9) {
                    if (hasAlreadyFlashed(rowIndex, colIndex, alreadyFlashed)) continue
                    didFlash = true
                    setAlreadyFlashed(rowIndex, colIndex, alreadyFlashed)
                    for (const direction of directions) {
                        const rowCheck = direction[0] + rowIndex
                        const colCheck = direction[1] + colIndex
                        if (
                            isInsideGrid(rowCheck, colCheck, arrayCopy.length, arrayCopy[0].length)
                        ) {
                            if (arrayCopy[rowCheck][colCheck] > 9) continue
                            const a = arrayCopy[rowCheck][colCheck]
                            arrayCopy[rowCheck][colCheck] = a + 1
                        }
                    }
                }
            }
        }
    }
    let flashed = 0
    for (let rowIndex = 0; rowIndex < arrayCopy.length; rowIndex++) {
        const row = arrayCopy[rowIndex]
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            if (arrayCopy[rowIndex][colIndex] > 9) {
                arrayCopy[rowIndex][colIndex] = 0
                flashed++
            }
        }
    }
    return [arrayCopy, flashed]
}

function setAlreadyFlashed(row, col, cache) {
    cache[`${row},${col}`] = true
}
function hasAlreadyFlashed(row, col, cache) {
    return cache[`${row},${col}`]
}
export const puzzleB = input => {
    const flashes = 100
    const arr = convertToMultidimensionalNumberArray(input, '\n', '')
    let arrayCopy = arr.map(a => a.slice())
    let result = 0
    for (let index = 0; index < 2000; index++) {
        const [next, flashesNbr] = step(arrayCopy)
        result += flashesNbr
        if (flashesNbr === 100) {
            return index + 1
        }
        arrayCopy = next
    }

    return result
}

function flash(row, col, arr) {
    for (const direction of directions) {
        const rowCheck = direction[0] + row
        const colCheck = direction[1] + col
        if (isInsideGrid(rowCheck, colCheck, arr.length, arr[0].length)) {
            if (arr[rowCheck][colCheck] === 0) continue
            const a = arr[rowCheck][colCheck]
            arr[rowIndex][colIndex] = a + 1 > 9 ? 0 : a + 1
        }
    }
}
