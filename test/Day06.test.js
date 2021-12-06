import { puzzleA, puzzleB } from '../src/days/Day06'
import { getPuzzleInputText } from '../src/puzzleInputs'

const day = '06'

test('day06 puzzle a example 1', () => {
    // Arrange
    const expected = 26
    const puzzleInput = getPuzzleInputText(day, 1)
    // Act
    const result = puzzleA({ input: puzzleInput, days: 18 })

    // Assert
    expect(result).toBe(expected)
})
test('day06 puzzle a', () => {
    // Arrange
    const expected = 380758
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleA({ input: puzzleInput, days: 80 })

    // Assert
    expect(result).toBe(expected)
})

test('day06 puzzle b', () => {
    // Arrange
    const expected = 1710623015163
    const puzzleInput = getPuzzleInputText(day)
    // Act
    const result = puzzleB({ input: puzzleInput, days: 256 })

    // Assert
    expect(result).toBe(expected)
})
