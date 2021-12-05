import { puzzleA, puzzleB } from '../src/days/Day05'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '05'
test('day05 puzzle a example', () => {
    // Arrange
    const expected = 5
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day05 puzzle', () => {
    // Arrange
    const expected = 8111
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day05 puzzle b example 1', () => {
    // Arrange
    const expected = 12
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day05 puzzle b', () => {
    // Arrange
    const expected = 22088
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
