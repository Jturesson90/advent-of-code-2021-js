import { convertToNumberArray } from '../puzzleInputs'

export const puzzleA = ({ input, days }) => {
    const arr = (input + '').split(',')
    let arrayCopy = [...arr]
    if (!Array.isArray(arrayCopy)) return 0
    for (let i = 0; i < days; i++) {
        const toBeAdded = []
        for (let j = 0; j < arrayCopy.length; j++) {
            if (arrayCopy[j] === 0) {
                arrayCopy[j] = 6
                toBeAdded.push(8)
            } else {
                arrayCopy[j] = arrayCopy[j] - 1
            }
        }
        arrayCopy = arrayCopy.concat(toBeAdded)
    }
    return arrayCopy.length
}
export const puzzleB = ({ input, days }) => {
    const arr = convertToNumberArray(input, ',')
    if (!Array.isArray(arr)) return 0
    return countLanternfish(arr, days)
}

const countLanternfish = (initialState, days, rate = 7) => {
    const numFish = new Array(rate + 2).fill(0)
    initialState.forEach(n => numFish[n]++)
    while (days-- > 0) {
        const fishToDouble = numFish[0]
        numFish.slice(0, -1).forEach((_, i) => (numFish[i] = numFish[i + 1]))
        numFish[rate - 1] += fishToDouble
        numFish[rate + 1] = fishToDouble
    }
    return numFish.reduce((a, b) => a + b, 0)
}
