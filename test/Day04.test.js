import { puzzleA, puzzleB } from '../src/days/Day04'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '04'
test('day04 puzzle a', () => {
    // Arrange
    const expected = 35711
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day04 puzzle b example', () => {
    // Arrange
    const expected = 1924
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day04 puzzle b', () => {
    // Arrange
    const expected = 5586
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
