import { puzzleA, puzzleB } from '../src/days/Day08'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '08'
test('day08 puzzle a', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day08 puzzle b', () => {
    // Arrange
    const expected = ''
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
