import { puzzleA, puzzleB } from '../src/days/Day14'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '14'
test('day14 puzzle', () => {
    // Arrange
    const expected = 2068
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day14 puzzle a example 1', () => {
    // Arrange
    const expected = 1588
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act

    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day14 puzzle b', () => {
    // Arrange
    const expected = 2158894777814
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
