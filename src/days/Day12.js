import { convertToStringArray } from '../puzzleInputs'

export const puzzleA = input => {
    const caves = getCaves(input)
    let path = ['start']
    const allPaths = dfs(caves['start'], caves['end'], caves, path)
    return allPaths.length
}
function getAllPaths(start, end, caves, visitedSmall = {}, path = [], paths = []) {
    const pathCopy = [...path]
    if (start.name === end.name) {
        return path
    }
    if (isSmallRoom(start.name)) {
        if (visitedSmall[start.name]) console.error('SHOULD NOT HAPPEN')
        else visitedSmall[start.name] = start.name
    }
    pathCopy.push(start.name)
    const len = start.connections.length
    for (let index = 0; index < len; index++) {
        const connection = start.connections[index]
        if (isSmallRoom(connection.name) && visitedSmall[connection.name]) continue
        //  paths''(getAllPaths(caves[connection.name], end, caves, visitedSmall, path, paths))
    }
    return paths
}
function dfs(curr, dest, caves, path = [], paths = []) {
    if (curr.name === dest.name) {
        paths.push(path)
    } else {
        const len = curr.connections.length
        for (let index = 0; index < len; index++) {
            const connectionName = curr.connections[index]
            if (isSmallRoom(connectionName) && path.includes(connectionName)) continue
            path.push(connectionName)
            dfs(caves[connectionName], dest, caves, path, paths)
            path.pop()
            //  if (isSmallRoom(connection.name) && visitedSmall[connection.name]) continue
            //  paths''(getAllPaths(caves[connection.name], end, caves, visitedSmall, path, paths))
        }
    }
    return paths
}
/*Algorithm Find_All_Paths ( Graph g )
1.  Push the source node src in the path ( list ).
2.  DFS ( src, dest, g )

DFS ( Source src, Destination dest, Graph g )
1.  If ( src == dest ) then
2.      A path has been found. Push the path in the list of all_the_paths ( list of list ).
3.  Else
4.     For every adjacent node adj_node that is adjacent to src do
5.        Push adj_node in the path.
6.        DFS ( adj_node, dest, g )
7.        Pop adj_node from the path. This is essentially a backtracking mechanism to find a different path from the source ( src ) node.

 */
/*
def dfs(data, path, paths = []):   
    datum = path[-1]              
    if datum in data:
        for val in data[datum]:
            new_path = path + [val]
            paths = dfs(data, new_path, paths)
    else:
        paths += [path]
    return paths
    */
function isSmallRoom(str) {
    return (str + '').toLowerCase() === str + '' && str !== 'end'
}
export const puzzleB = input => {
    return input
}
function getCaves(input) {
    const arr = convertToStringArray(input).map(a => {
        const b = a.trim().split('-')
        return {
            a: b[0],
            b: b[1],
            aFound: false,
            bFound: false,
        }
    })
    const caves = {}
    arr.forEach(element => {
        caves[element.a] = { ...caves[element.a], [element.b]: element.b }
        caves[element.b] = { ...caves[element.b], [element.a]: element.a }
    })
    const realCaves = {}
    for (const key in caves) {
        if (Object.hasOwnProperty.call(caves, key)) {
            const element = caves[key]
            realCaves[key] = {
                name: key,
                connections: Object.values(element).filter(a => a !== 'start'),
            }
        }
    }
    return realCaves
}
