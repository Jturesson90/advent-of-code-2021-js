import { convertToNumberArray } from '../puzzleInputs'

export const puzzleA = input => {
    return convertToNumberArray(input).reduce((savedValue, currentValue, currentIndex, array) => {
        if (currentIndex <= 0) return 0
        if (currentValue > array[currentIndex - 1]) return savedValue + 1
        return savedValue
    }, 0)
}

export const puzzleB = input => {
    const numberArray = convertToNumberArray(input)
    const slides = []
    let asciiStart = 65
    for (let index = 0; index < numberArray.length; index++) {
        const letter = String.fromCharCode(index + asciiStart)
        const first = numberArray[index]
        const second = index + 1 < numberArray.length ? numberArray[index + 1] : 0
        const third = index + 2 < numberArray.length ? numberArray[index + 2] : 0
        if (first && second && third) slides.push(first + second + third)
    }
    return slides.reduce((savedValue, currentValue, currentIndex, array) => {
        if (currentIndex <= 0) return 0
        if (currentValue > array[currentIndex - 1]) return savedValue + 1
        return savedValue
    }, 0)
}
