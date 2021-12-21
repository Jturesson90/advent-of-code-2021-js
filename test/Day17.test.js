import { puzzleA, puzzleB } from '../src/days/Day17'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '17'
test('day17 puzzle a', () => {
    // Arrange
    const expected = 2775
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day17 puzzle a example 1', () => {
    // Arrange
    const expected = 45
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day17 puzzle b example 1', () => {
    // Arrange
    const expected = 112
    const puzzleInput = getPuzzleInputText(day, 1)

    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day17 puzzle b', () => {
    // Arrange
    const expected = 1566
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
