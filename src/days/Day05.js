import { convertToStringArray } from '../puzzleInputs'

export const puzzleA = input => {
    const arr = convertToStringArray(input, '\n')

    const linesInput = arr.map(a => {
        var xyInput = convertToStringArray(a, ' -> ')
        var xInput = convertToStringArray(xyInput[0], ',')
        var yInput = convertToStringArray(xyInput[1], ',')
        return new Line(
            Number.parseInt(xInput[0]),
            Number.parseInt(xInput[1]),
            Number.parseInt(yInput[0]),
            Number.parseInt(yInput[1]),
        )
    })
    const horizontalAndVerticalLines = linesInput.filter(a => a.x1 === a.x2 || a.y1 === a.y2)
    const board = {}
    for (let index = 0; index < horizontalAndVerticalLines.length; index++) {
        const line = horizontalAndVerticalLines[index]
        const positions = getPositionsFromLine(line, [
            [line.x1, line.y1],
            [line.x2, line.y2],
        ])
        positions.forEach(a => {
            const x = a[0]
            const y = a[1]
            const key = `${x},${y}`
            if (board[key]) {
                board[key]++
            } else board[key] = 1
        })
    }
    return Object.entries(board).reduce((prev, [key, value]) => (value > 1 ? prev + 1 : prev), 0)
}

const getPositionsFromLine = ({ x1, y1, x2, y2 }, arr) => {
    if (Array.isArray(arr)) {
        var a = arr.findIndex(a => a[0] === x1 && a[1] === y1)
        if (a === -1) {
            arr.push([x1, y1])
        }
        var b = arr.findIndex(a => a[0] === x2 && a[1] === y2)
        if (b === -1) {
            arr.push([x2, y2])
        }
    }
    let newX1 = x1
    let newY1 = y1
    if (x1 === x2 && y1 === y2) {
        return arr
    }
    if (x1 > x2) {
        newX1 = x1 - 1
    } else if (x1 < x2) {
        newX1 = x1 + 1
    }
    if (y1 > y2) {
        newY1 = y1 - 1
    } else if (y1 < y2) {
        newY1 = y1 + 1
    }
    return getPositionsFromLine({ x1: newX1, y1: newY1, x2, y2 }, arr)
}
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
class Line {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }
}
export const puzzleB = input => {
    const arr = convertToStringArray(input, '\n')

    const linesInput = arr.map(a => {
        var xyInput = convertToStringArray(a, ' -> ')
        var xInput = convertToStringArray(xyInput[0], ',')
        var yInput = convertToStringArray(xyInput[1], ',')
        return new Line(
            Number.parseInt(xInput[0]),
            Number.parseInt(xInput[1]),
            Number.parseInt(yInput[0]),
            Number.parseInt(yInput[1]),
        )
    })
    const board = {}
    for (let index = 0; index < linesInput.length; index++) {
        const line = linesInput[index]
        const positions = getPositionsFromLine(line, [
            [line.x1, line.y1],
            [line.x2, line.y2],
        ])
        positions.forEach(a => {
            const x = a[0]
            const y = a[1]
            const key = `${x},${y}`
            if (board[key]) {
                board[key]++
            } else board[key] = 1
        })
    }
    return Object.entries(board).reduce((prev, [key, value]) => (value > 1 ? prev + 1 : prev), 0)
}
