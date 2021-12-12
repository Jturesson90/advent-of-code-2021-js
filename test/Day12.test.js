import { puzzleA, puzzleB } from '../src/days/Day12'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '12'
test('day12 puzzle a example 1', () => {
    // Arrange
    const expected = 10
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day12 puzzle a example 1', () => {
    // Arrange
    const expected = 10
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day12 puzzle b', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day12 puzzle b example 1', () => {
    // Arrange
    const expected = 36
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
