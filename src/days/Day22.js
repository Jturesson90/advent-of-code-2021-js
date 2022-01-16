import { convertToStringArray } from '../puzzleInputs'

export const puzzleA = input => {
    const data = parseInput(input)
    let result = {}
    for (let i = 0; i < data.length; i++) {
        const { positions, on } = data[i]
        const xArr = positions.x.filter(a => a >= -50 && a <= 50)
        const yArr = positions.y.filter(a => a >= -50 && a <= 50)
        const zArr = positions.z.filter(a => a >= -50 && a <= 50)
        const neR = {}
        for (let x = 0; x < xArr.length; x++) {
            for (let y = 0; y < yArr.length; y++) {
                for (let z = 0; z < zArr.length; z++) {
                    neR[`${xArr[x]},${yArr[y]},${zArr[z]}`] = on === 'on'
                }
            }
        }
        result = { ...result, ...neR }
    }
    return Object.keys(result).reduce(function (previous, key) {
        return result[key] === true ? previous + 1 : previous
    }, 0)
}

export const puzzleB = input => {
    const data = parseInput(input)
    let result = {}
    for (let i = 0; i < data.length; i++) {
        const { positions, on } = data[i]
        const xArr = positions.x
        const yArr = positions.y
        const zArr = positions.z
        const neR = {}
        for (let x = 0; x < xArr.length; x++) {
            for (let y = 0; y < yArr.length; y++) {
                for (let z = 0; z < zArr.length; z++) {
                    neR[`${xArr[x]},${yArr[y]},${zArr[z]}`] = on === 'on'
                }
            }
        }
        result = { ...result, ...neR }
    }
    return Object.keys(result).reduce(function (previous, key) {
        return result[key] ? previous + 1 : previous
    }, 0)
}
function parseInput(input) {
    return convertToStringArray(input).map(parseRange)
}
function parseRange(value = '', index, array) {
    const vl = value.split(' ')
    function getRange(pos = '') {
        var p = pos.split(',').reduce((prev, curr) => {
            const a = curr.split('=')
            const key = a[0]
            const r = a[1].split('..')
            const min = Number.parseInt(r[0])
            const max = Number.parseInt(r[1])
            const b = []
            for (let index = min; index <= max; index++) {
                b.push(index)
            }
            return { ...prev, [key]: b }
        }, {})

        return p
    }
    return {
        on: vl[0] === 'on' ? 'on' : 'off',
        positions: getRange(vl[1]),
    }
}
