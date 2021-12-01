import { puzzleA, puzzleB } from '../src/days/Day01'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '01'

test('day01 puzzle a', () => {
    // Arrange
    const expected = 1624
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day01 puzzle a example 1', () => {
    // Arrange
    const expected = 7
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day01 puzzle B example 1', () => {
    // Arrange
    const expected = 5
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day01 puzzle B', () => {
    // Arrange
    const expected = 1653
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
