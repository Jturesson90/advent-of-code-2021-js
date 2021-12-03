import { convertToStringArray } from '../puzzleInputs'

export const puzzleA = input => {
    var a = convertToStringArray(input)
    const c = {
        forward: 0,
        down: 0,
        up: 0,
    }
    for (let index = 0; index < a.length; index++) {
        const element = a[index] + ''
        var b = element.split(' ')
        c[b[0]] = c[b[0]] + Number.parseInt(b[1])
    }
    return c.forward * (c.down - c.up)
}

export const puzzleB = input => {
    var a = convertToStringArray(input)

    const c = {
        horizontal: 0,
        depth: 0,
        aim: 0,
    }
    for (let index = 0; index < a.length; index++) {
        const element = a[index] + ''
        var b = element.split(' ')
        let dir = b[0]
        let amount = Number.parseInt(b[1])
        c[dir] += amount
        switch (dir) {
            case 'forward':
                c.horizontal += amount
                c.depth += amount * c.aim
                break
            case 'up':
                c.aim -= amount
                break
            case 'down':
                c.aim += amount
                break
        }
    }
    return c.depth * c.horizontal
}
