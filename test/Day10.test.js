import { puzzleA, puzzleB } from '../src/days/Day10'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '10'
test('day10 puzzle a example 1', () => {
    // Arrange
    const expected = 26397
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day10 puzzle', () => {
    // Arrange
    const expected = 369105
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day10 puzzle b example 1', () => {
    // Arrange
    const expected = 288957
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day10 puzzle b', () => {
    // Arrange
    const expected = 3999363569
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
