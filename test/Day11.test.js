import { puzzleA, puzzleB } from '../src/days/Day11'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '11'
test('day11 puzzle a', () => {
    // Arrange
    const expected = 1649
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day11 puzzle a example 1', () => {
    // Arrange
    const expected = 1656
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day11 puzzle b', () => {
    // Arrange
    const expected = 256
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
