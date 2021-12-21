import { puzzleA, puzzleB } from '../src/days/Day15'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '15'
test('day15 puzzle a', () => {
    // Arrange
    const expected = 366
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day15 puzzle a example 1', () => {
    // Arrange
    const expected = 40
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

315
test('day15 puzzle b', () => {
    // Arrange
    const expected = 2829
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day15 puzzle b example 1', () => {
    // Arrange
    const expected = 315
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
