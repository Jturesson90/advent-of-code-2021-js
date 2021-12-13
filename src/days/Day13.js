import { convertToStringArray } from '../puzzleInputs'
import { createAndFillTwoDArray, getMax } from '../util/function'
import { count } from '../util/math'

export const puzzleA = input => {
    const data = getPuzzleDataFromInput(input)
    const topX = getMax(data.dots, 'x')
    const topY = getMax(data.dots, 'y')
    const arr = createAndFillTwoDArray({ rows: topY + 1, columns: topX + 1, defaultValue: 0 })
    data.dots.forEach(a => {
        arr[a.y][a.x] = 1
    })
    let paper = [...arr]
    for (let i = 0; i < data.instructions.length; i++) {
        const a = data.instructions[i]

        let newPaper = []
        if (a.x) {
            for (let rowIndex = 0; rowIndex < paper.length; rowIndex++) {
                const left = paper[rowIndex].slice(0, a.x)
                const right = paper[rowIndex]
                    .slice(a.x + 1, a.x + 1 + paper[rowIndex].length)
                    .reverse()
                const diff = left.length - right.length
                newPaper[rowIndex] = []
                for (
                    let columnIndex = 0;
                    columnIndex < left.length || columnIndex < right.length;
                    columnIndex++
                ) {
                    const leftValue = left[diff >= 0 ? columnIndex : columnIndex + diff] || 0
                    const rightValue = right[diff <= 0 ? columnIndex : columnIndex - diff] || 0
                    newPaper[rowIndex][columnIndex] = Number.parseInt(leftValue || rightValue)
                }
            }
        } else if (a.y) {
            const upper = paper.slice(0, a.y)
            const lower = paper.slice(a.y + 1, a.y + 1 + paper.length).reverse()
            const diff = upper.length - lower.length
            for (let rowIndex = 0; rowIndex < upper.length || rowIndex < lower.length; rowIndex++) {
                const upperRow = upper[diff >= 0 ? rowIndex : rowIndex + diff] || []
                const lowerRow = lower[diff <= 0 ? rowIndex : rowIndex - diff] || []
                newPaper[rowIndex] = []
                for (
                    let columnIndex = 0;
                    columnIndex < upperRow.length || columnIndex < lowerRow.length;
                    columnIndex++
                ) {
                    const upperValue = upperRow[columnIndex] || 0
                    const lowerValue = lowerRow[columnIndex] || 0
                    newPaper[rowIndex][columnIndex] = Number.parseInt(upperValue || lowerValue)
                }
            }
        }
        paper = [...newPaper]
        break
    }

    let con = paper.reduce((prev, curr) => prev + count(curr)(1), 0)
    return con
}

export const puzzleB = input => {
    const data = getPuzzleDataFromInput(input)
    const topX = getMax(data.dots, 'x')
    const topY = getMax(data.dots, 'y')
    const arr = createAndFillTwoDArray({ rows: topY + 1, columns: topX + 1, defaultValue: 0 })
    data.dots.forEach(a => {
        arr[a.y][a.x] = 1
    })
    let paper = [...arr]
    for (let i = 0; i < data.instructions.length; i++) {
        const a = data.instructions[i]

        let newPaper = []
        if (a.x) {
            for (let rowIndex = 0; rowIndex < paper.length; rowIndex++) {
                const left = paper[rowIndex].slice(0, a.x)
                const right = paper[rowIndex]
                    .slice(a.x + 1, a.x + 1 + paper[rowIndex].length)
                    .reverse()
                const diff = left.length - right.length
                newPaper[rowIndex] = []
                for (
                    let columnIndex = 0;
                    columnIndex < left.length || columnIndex < right.length;
                    columnIndex++
                ) {
                    const leftValue = left[diff >= 0 ? columnIndex : columnIndex + diff] || 0
                    const rightValue = right[diff <= 0 ? columnIndex : columnIndex - diff] || 0
                    newPaper[rowIndex][columnIndex] = Number.parseInt(leftValue || rightValue)
                }
            }
        } else if (a.y) {
            const upper = paper.slice(0, a.y)
            const lower = paper.slice(a.y + 1, a.y + 1 + paper.length).reverse()
            const diff = upper.length - lower.length
            for (let rowIndex = 0; rowIndex < upper.length || rowIndex < lower.length; rowIndex++) {
                const upperRow = upper[diff >= 0 ? rowIndex : rowIndex + diff] || []
                const lowerRow = lower[diff <= 0 ? rowIndex : rowIndex - diff] || []
                newPaper[rowIndex] = []
                for (
                    let columnIndex = 0;
                    columnIndex < upperRow.length || columnIndex < lowerRow.length;
                    columnIndex++
                ) {
                    const upperValue = upperRow[columnIndex] || 0
                    const lowerValue = lowerRow[columnIndex] || 0
                    newPaper[rowIndex][columnIndex] = Number.parseInt(upperValue || lowerValue)
                }
            }
        }
        paper = [...newPaper]
    }
    let stringRows = ''
    paper.forEach(element => {
        stringRows += element.map(a => (a === 1 ? '#' : '.')).join('') + '\n'
    })
    return stringRows
}

function getPuzzleDataFromInput(input = '') {
    const arr = convertToStringArray(input, '\n\n')
    const dots = convertToStringArray(arr[0], '\n').map(a => {
        const b = a.split(',')
        return { x: Number.parseInt(b[0]), y: Number.parseInt(b[1]) }
    })
    const instructions = convertToStringArray(arr[1], '\n').map(a => {
        const b = a.replace('fold along ', '').split('=')
        return {
            [b[0]]: Number.parseInt(b[1]),
        }
    })
    return { dots, instructions }
}
