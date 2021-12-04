import { convertToStringArray, convertToNumberArray } from '../puzzleInputs'
export const puzzleA = input => {
    const arr = convertToStringArray(input, '\n\n')
    if (!Array.isArray(arr)) return
    const bingoDraws = convertToNumberArray(arr[0], ',')
    arr.shift()
    const boards = []
    for (let i = 0; i < arr.length; i++) {
        boards[i] = {
            rows: [[], [], [], [], []],
            columns: [[], [], [], [], []],
        }
        const element = arr[i]
        const board = convertToStringArray(element)
        for (let row = 0; row < board.length; row++) {
            boards[i].rows[row] = convertToNumberArray(board[row], ' ').filter(
                a => !Number.isNaN(a),
            )
            for (let col = 0; col < boards[i].rows[row].length; col++) {
                const colElement = boards[i].rows[row][col]
                boards[i].columns[col].push(colElement)
            }
        }
    }
    let found = { board: 1, draw: 0 }
    found = null
    for (let i = 0; i < bingoDraws.length; i++) {
        const bingoDraw = bingoDraws[i]
        for (let x = 0; x < boards.length; x++) {
            const board = boards[x]
            for (let row = 0; row < board.rows.length; row++) {
                board.rows[row] = removeItemOnce(board.rows[row], bingoDraw)
                if (board.rows[row].length === 0 && found === null) {
                    found = { board: x, draw: bingoDraw }
                }
            }
            for (let col = 0; col < board.columns.length; col++) {
                board.columns[col] = removeItemOnce(board.columns[col], bingoDraw)
                if (board.columns[col].length === 0 && found === null) {
                    found = { board: x, draw: bingoDraw }
                }
            }
        }
        if (found !== null) {
            break
        }
    }
    let result = 0
    if (found !== null) {
        result =
            found.draw * boards[found.board].rows.flat().reduce((prevB, curB) => prevB + curB, 0)
    }
    return result
}
function removeItemOnce(arr, value) {
    if (!Array.isArray(arr)) return arr
    var index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}

export const puzzleB = input => {
    const arr = convertToStringArray(input, '\n\n')
    if (!Array.isArray(arr)) return
    const bingoDraws = convertToNumberArray(arr[0], ',')
    arr.shift()
    let boards = []
    for (let i = 0; i < arr.length; i++) {
        boards[i] = {
            index: i,
            rows: [[], [], [], [], []],
            columns: [[], [], [], [], []],
        }
        const element = arr[i]
        const board = convertToStringArray(element)
        for (let row = 0; row < board.length; row++) {
            boards[i].rows[row] = convertToNumberArray(board[row], ' ').filter(
                a => !Number.isNaN(a),
            )
            for (let col = 0; col < boards[i].rows[row].length; col++) {
                const colElement = boards[i].rows[row][col]
                boards[i].columns[col].push(colElement)
            }
        }
    }
    const boardsCopy = [...boards]
    let found = [{ boardIndex: 1, draw: 0, board: null }]
    found = []
    let lastFound = { board: null, bingoDraw: 0 }
    for (let i = 0; i < bingoDraws.length; i++) {
        const bingoDraw = bingoDraws[i]
        for (let x = 0; x < boards.length; x++) {
            const board = boards[x]
            for (let row = 0; row < board.rows.length; row++) {
                board.rows[row] = removeItemOnce(board.rows[row], bingoDraw)
                if (board.rows[row].length === 0) {
                    found.push({ boardIndex: board.index, draw: bingoDraw, board })
                }
            }
            for (let col = 0; col < board.columns.length; col++) {
                board.columns[col] = removeItemOnce(board.columns[col], bingoDraw)
                if (board.columns[col].length === 0) {
                    found.push({ boardIndex: board.index, draw: bingoDraw, board })
                }
            }
        }
        if (found.length > 0) {
            for (let index = 0; index < found.length; index++) {
                const element = found[index]
                const boardin = boards.findIndex(a => a.index === element.boardIndex)
                lastFound = {
                    board: { rows: [...element.board.rows] },
                    bingoDraw: element.draw,
                }
                if (boardin > -1) {
                    boards.splice(boardin, 1)
                }
            }
            found = []
        }
    }

    const result =
        lastFound.bingoDraw * lastFound.board.rows.flat().reduce((prevB, curB) => prevB + curB, 0)

    return result
}
