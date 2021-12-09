import { puzzleA, puzzleB } from '../src/days/Day09'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '09'
test('day09 puzzle a', () => {
    // Arrange
    const expected = 514
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day09 puzzle b example 1', () => {
    // Arrange
    const expected = 15
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day09 puzzle b', () => {
    // Arrange
    const expected = 1103130
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day09 puzzle b example 1', () => {
    // Arrange
    const expected = 1134
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
