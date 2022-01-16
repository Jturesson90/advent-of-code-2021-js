import { convertToStringArray } from '../puzzleInputs'
import { getMin } from '../util/function'

export const puzzleA = input => {
    const arr = convertToStringArray(input)

    let player1Position = Number.parseInt(arr[0].split(' position: ')[1])
    let player2Position = Number.parseInt(arr[1].split(' position: ')[1])

    let players = [
        { pos: player1Position, points: 0 },
        { pos: player2Position, points: 0 },
    ]
    let dieIndex = 1
    let rolledTimes = 0
    let safe = 1000
    while (safe > 0) {
        safe--
        for (let j = 0; j < players.length; j++) {
            let pos = players[j].pos
            let rolled = 0
            for (let i = 0; i < 3; i++) {
                rolled += dieIndex
                dieIndex++
                rolledTimes++
                if (dieIndex > 100) {
                    dieIndex = 1
                }
            }

            pos = ((pos + rolled - 1) % 10) + 1

            let points = players[j].points + pos
            players[j] = { pos, points }
            if (points >= 1000) {
                break
            }
        }
        if (players.filter(a => a.points >= 1000).length > 0) break
    }
    return rolledTimes * getMin(players, 'points')
}

export const puzzleB = input => {
    let positions = input.split('\n').map(line => line.split(': ')[1])
    let scores = [0, 0]

    const wins = [0, 0]
    const rolls = [1, 2, 3]

    let gameCounts = {
        [[positions, scores].join(';')]: 1,
    }
    while (Object.entries(gameCounts).length > 0) {
        for (const i of [0, 1]) {
            const nextGameCounts = {}
            for (const [state, gameCount] of Object.entries(gameCounts)) {
                const [positions, scores] = state.split(';').map(s => s.split(',').map(Number))

                for (const r1 of rolls) {
                    for (const r2 of rolls) {
                        for (const r3 of rolls) {
                            const nextPositions = [...positions]
                            nextPositions[i] = ((positions[i] + r1 + r2 + r3 - 1) % 10) + 1

                            const nextScores = [...scores]
                            nextScores[i] += nextPositions[i]

                            if (nextScores[i] >= 21) {
                                wins[i] += gameCount
                                continue
                            }

                            const nextState = [nextPositions, nextScores].join(';')
                            nextGameCounts[nextState] = (nextGameCounts[nextState] ?? 0) + gameCount
                        }
                    }
                }
            }
            gameCounts = nextGameCounts
        }
    }

    return Math.max(...wins)
}
