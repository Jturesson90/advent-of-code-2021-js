import { puzzleA, puzzleB } from '../src/days/Day08'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '08'
test('day08 puzzle a', () => {
    // Arrange
    const expected = 342
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day08 puzzle a example 1', () => {
    // Arrange
    const expected = 26
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day08 puzzle b', () => {
    // Arrange
    const expected = 1068933
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day08 puzzle b example 1', () => {
    // Arrange
    const expected = 61229
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
