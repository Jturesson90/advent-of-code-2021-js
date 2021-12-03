import { puzzleA, puzzleB } from '../src/days/Day03'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '03'
test('day03 puzzle a', () => {
    // Arrange
    const expected = 3882564
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})

test('day03 puzzle a example 1', () => {
    // Arrange
    const expected = 198
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day03 puzzle b', () => {
    // Arrange
    const expected = 3385170
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day03 puzzle b example 1', () => {
    // Arrange
    const expected = 230
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
