import { puzzleA, puzzleB } from '../src/days/Day22'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '22'
test('day22 puzzle a example 1', () => {
    // Arrange
    const expected = 39
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day22 puzzle example 2', () => {
    // Arrange
    const expected = 0
    const puzzleInput = getPuzzleInputText(day, 2)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day22 puzzle', () => {
    // Arrange
    const expected = 609563
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day22 puzzle b', () => {
    // Arrange
    const expected = 0
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
