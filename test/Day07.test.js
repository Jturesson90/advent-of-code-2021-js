import { puzzleA, puzzleB } from '../src/days/Day07'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '07'
test('day07 puzzle a example 1', () => {
    // Arrange
    const expected = 37
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day07 puzzle a', () => {
    // Arrange
    const expected = 341558
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day07 puzzle b example 1', () => {
    // Arrange
    const expected = 168
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day07 puzzle b', () => {
    // Arrange
    const expected = 93214037
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
