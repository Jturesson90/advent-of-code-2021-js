import { convertToStringArray } from '../puzzleInputs'
import { hasDuplicates } from '../util/function'
import { depthFirstSearch } from '../util/math'

export const puzzleA = input => {
    const caves = getCaves(input)
    let path = ['start']
    const allPaths = depthFirstSearch('start', 'end', caves, path, (cave, currentPath) => {
        return isSmallRoom(cave) && currentPath.includes(cave)
    })
    return allPaths.length
}
export const puzzleB = input => {
    const caves = getCaves(input)
    let path = ['start']
    const allPaths = depthFirstSearch('start', 'end', caves, path, (cave, currentPath) => {
        return (
            isSmallRoom(cave) &&
            currentPath.includes(cave) &&
            hasDuplicates(currentPath.filter(isSmallRoom))
        )
    })
    return allPaths.length
}

function isSmallRoom(str) {
    return (str + '').toLowerCase() === str + '' && str !== 'end' && str !== 'start'
}

function getCaves(input) {
    const arr = convertToStringArray(input).map(a => {
        const b = a.trim().split('-')
        return {
            a: b[0],
            b: b[1],
        }
    })
    const caves = {}
    arr.forEach(element => {
        caves[element.a] = { ...caves[element.a], [element.b]: element.b }
        caves[element.b] = { ...caves[element.b], [element.a]: element.a }
    })
    const realCaves = {}
    for (const key in caves) {
        if (Object.hasOwnProperty.call(caves, key)) {
            realCaves[key] = Object.values(caves[key]).filter(a => a !== 'start')
        }
    }
    return realCaves
}
