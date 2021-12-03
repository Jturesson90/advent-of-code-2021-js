import { puzzleA, puzzleB } from '../src/days/Day02'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '02'

test('day02 puzzle a', () => {
    // Arrange
    let expected = 2039912
    var puzzleInput = getPuzzleInputText(day)
    var actual = puzzleA(puzzleInput)
    // Assert
    expect(expected).toBe(actual)
})
test('day02 puzzle a example', () => {
    // Arrange
    let expected = 150
    var puzzleInput = getPuzzleInputText(day, 1)
    var actual = puzzleA(puzzleInput)
    // Assert
    expect(expected).toBe(actual)
})

test('day02 puzzle b', () => {
    // Arrange
    let expected = 1942068080
    var puzzleInput = getPuzzleInputText(day)
    var actual = puzzleB(puzzleInput)
    // Assert
    expect(expected).toBe(actual)
})

test('day02 puzzle b example', () => {
    // Arrange
    let expected = 900
    var puzzleInput = getPuzzleInputText(day, 1)
    var actual = puzzleB(puzzleInput)
    // Assert
    expect(expected).toBe(actual)
})
