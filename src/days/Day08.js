import { convertToStringArray } from '../puzzleInputs'
import * as _ from 'lodash'
export const puzzleA = input => {
    const arr = convertToStringArray(input)
    const inputs = arr.map(a => {
        var b = a.split(' | ')
        return {
            input: b[0],
            output: b[1],
        }
    })
    const outputs = inputs.map(a => a.output)
    let r = 0
    for (let index = 0; index < outputs.length; index++) {
        const element = outputs[index].split(' ')
        const ab = _.countBy(element, 'length')
        r += ab[2] || 0
        r += ab[3] || 0
        r += ab[4] || 0
        r += ab[7] || 0
    }

    return r
}
function calc(input, output, numberDictionary = {}) {
    const inputCopy = [...input]
    let i = 0
    let one = ''
    let three = ''
    let nine = ''
    let leftOnes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    while (i > -1) {
        const element = stringToAlphabetic(inputCopy[i])
        i = i > input.length - 1 ? 0 : i + 1
        if (numberDictionary[element]) continue
        if (leftOnes.length === 1) {
            numberDictionary[element] = leftOnes[0]
            leftOnes.length = 0
        }
        switch (element.length) {
            case 2: // 1
                one = element
                leftOnes = leftOnes.filter(a => a !== 1)
                numberDictionary[element] = 1
                break
            case 3: // 7
                numberDictionary[element] = 7
                leftOnes = leftOnes.filter(a => a !== 7)
                break
            case 4: // 4
                numberDictionary[element] = 4
                leftOnes = leftOnes.filter(a => a !== 4)
                break

            case 5: // 2,3,5
                if (isIn(element, one)) {
                    // 3
                    three = element
                    leftOnes = leftOnes.filter(a => a !== 3)
                    numberDictionary[element] = 3
                } else if (isIn(nine, element)) {
                    leftOnes = leftOnes.filter(a => a !== 5)
                    numberDictionary[element] = 5
                } else if (!leftOnes.includes(3) && !leftOnes.includes(5)) {
                    leftOnes = leftOnes.filter(a => a !== 2)
                    numberDictionary[element] = 2
                }
                // numberDictionary[element] = 4
                break
            case 6: // 0,6,9
                if (isIn(element, three)) {
                    // 9
                    leftOnes = leftOnes.filter(a => a !== 9)
                    numberDictionary[element] = 9
                    nine = element
                } else if (!leftOnes.includes(9) && isIn(element, one)) {
                    // 0
                    leftOnes = leftOnes.filter(a => a !== 0)
                    numberDictionary[element] = 0
                } else if (!leftOnes.includes(0) && !leftOnes.includes(9)) {
                    // 6
                    leftOnes = leftOnes.filter(a => a !== 6)
                    numberDictionary[element] = 6
                }
                //numberDictionary[element] = 4
                break

            case 7: // 8
                numberDictionary[element] = 8
                break
        }
        if (Object.keys(numberDictionary).length > 9) break
    }

    let r = []
    for (let i = 0; i < output.length; i++) {
        const element = stringToAlphabetic(output[i])
        if (numberDictionary[element] !== undefined) {
            r.push(numberDictionary[element] + '')
        }
    }
    const stringArray = r.join('')
    return Number.parseInt(stringArray, 10)
}

export const puzzleB = input => {
    const arr = convertToStringArray(input)
    const inputs = arr.map(a => {
        var b = a.split(' | ')
        return {
            input: b[0].split(' '),
            output: b[1].split(' '),
        }
    })
    let r = 0
    inputs.forEach(a => {
        r += calc(a.input, a.output)
    })
    return r
}

const stringToAlphabetic = str => {
    const myArray = (str + '').split('')
    const sorted = myArray.sort()
    return sorted.join('')
}
const isIn = (str1, str2) => {
    const a = (str1 + '').split('')
    const b = (str2 + '').split('')
    if (!a.length || !b.length) return false
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) return false
    }
    return true
}
