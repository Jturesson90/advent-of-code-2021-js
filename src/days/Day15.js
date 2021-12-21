import { convertToMultidimensionalNumberArray } from '../puzzleInputs'

export const puzzleA = input => {
    const grid = convertToMultidimensionalNumberArray(input, '\n', '').map(row =>
        row.map(risk => ({
            risk,
            pathRisk: Infinity,
            visited: false,
            up: null,
            down: null,
            left: null,
            right: null,
        })),
    )
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length; y++) {
            const node = grid[y][x]
            if (x > 0) node.left = grid[y][x - 1]
            if (x < grid.length - 1) node.right = grid[y][x + 1]
            if (y > 0) node.up = grid[y - 1][x]
            if (y < grid.length - 1) node.down = grid[y + 1][x]
        }
    }

    grid[0][0].pathRisk = 0
    const exit = grid[grid.length - 1][grid.length - 1]
    function updatePathRisk(from, to) {
        const newRisk = from.pathRisk + to.risk
        if (newRisk < to.pathRisk) {
            to.pathRisk = newRisk
        }
    }

    const nodeQueue = []
    nodeQueue.push(grid[0][0])

    while (nodeQueue.length > 0) {
        if (exit.visited) {
            break
        }
        const current = nodeQueue[0]
        if (current.visited) {
            nodeQueue.shift()
            continue
        }

        if (current.up && !current.up.visited) {
            updatePathRisk(current, current.up)
            nodeQueue.push(current.up)
        } else if (current.down) {
            updatePathRisk(current, current.down)
            nodeQueue.push(current.down)
        }
        if (current.right) {
            updatePathRisk(current, current.right)
            nodeQueue.push(current.right)
        } else if (current.left) {
            updatePathRisk(current, current.left)
            nodeQueue.push(current.left)
        }

        current.visited = true
        nodeQueue.shift()
    }
    return exit.pathRisk
}

export const puzzleB = input => {
    const gridNums = convertToMultidimensionalNumberArray(input, '\n', '')
    const initialSize = gridNums.length
    for (let y = 0; y < initialSize; y++) {
        const row1 = gridNums[y]
        for (let rY = 0; rY < 5; rY++) {
            const y2 = rY * initialSize + y
            const row2 = gridNums[y2] || (gridNums[y2] = [])
            for (let x = 0; x < initialSize; x++) {
                for (let rX = 0; rX < 5; rX++) {
                    if (rY === 0 && rX === 0) {
                        continue
                    }
                    const x2 = rX * initialSize + x

                    const increase = rX + rY
                    let newRisk = row1[x] + increase
                    if (newRisk > 9) {
                        newRisk -= 9
                    }

                    row2[x2] = newRisk
                }
            }
        }
    }
    const grid = gridNums.map(row =>
        row.map(risk => ({
            risk,
            pathRisk: Infinity,
            visited: false,
            up: null,
            down: null,
            left: null,
            right: null,
            prev: null,
        })),
    )
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length; y++) {
            const node = grid[y][x]
            if (x > 0) node.left = grid[y][x - 1]
            if (x < grid.length - 1) node.right = grid[y][x + 1]
            if (y > 0) node.up = grid[y - 1][x]
            if (y < grid.length - 1) node.down = grid[y + 1][x]
        }
    }

    grid[0][0].pathRisk = 0
    const exit = grid[grid.length - 1][grid.length - 1]

    function updateConnection(from, to) {
        const newRisk = from.pathRisk + to.risk
        if (newRisk < to.pathRisk) {
            to.pathRisk = newRisk
            to.prev = from
        }
    }

    const nodeQueue = new Set()
    nodeQueue.add(grid[0][0])

    function pickNextFromQueue() {
        let next = null
        for (const node of nodeQueue) {
            if (next === null || node.pathRisk < next.pathRisk) {
                next = node
            }
        }
        return next
    }

    while (nodeQueue.size > 0) {
        if (exit.visited) {
            break
        }
        const current = pickNextFromQueue()
        if (current.up && !current.up.visited) {
            updateConnection(current, current.up)
            nodeQueue.add(current.up)
        }
        if (current.down && !current.down.visited) {
            updateConnection(current, current.down)
            nodeQueue.add(current.down)
        }
        if (current.right && !current.right.visited) {
            updateConnection(current, current.right)
            nodeQueue.add(current.right)
        }
        if (current.left && !current.left.visited) {
            updateConnection(current, current.left)
            nodeQueue.add(current.left)
        }
        current.visited = true
        nodeQueue.delete(current)
    }

    return exit.pathRisk
}
