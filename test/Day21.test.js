import { puzzleA, puzzleB } from '../src/days/Day21'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '21'
test('day21 puzzle a example 1', () => {
    // Arrange
    const expected = 739785
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day21 puzzle a', () => {
    // Arrange
    const expected = 551901
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day21 puzzle b', () => {
    // Arrange
    const expected = 272847859601291
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
test('day21 puzzle b example 1', () => {
    // Arrange
    const expected = 444356092776315
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleB(puzzleInput)

    // Assert
    expect(result).toBe(expected)
})
