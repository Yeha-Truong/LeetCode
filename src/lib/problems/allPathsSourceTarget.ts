// export default function allPathsSourceTarget(graph: number[][]): number[][] {
//     let path: boolean[] = [];

//     for (let index = 0; index < graph.length; index++)
//         path[index] = false;

//     return travel(graph, 0, path);
// };

// export default function travel(graph: number[][], position: number, path: boolean[]): number[][] {
//     if (path[position])
//         return [];

//     if (position == graph.length - 1)
//         return [[position]];

//     path[position] = true;

//     let result: number[][] = [];

//     for (let index: number = 0; index < graph[position].length; index++) {
//         let trial: number[][] = travel(graph, graph[position][index], path);

//         if (trial.length != 0) {
//             trial.forEach(element => {
//                 element.unshift(position);
//             });

//             result = result.concat()
//         }
//     }

//     path[position] = false;

//     return result;
// }

export default function allPathsSourceTarget(graph: number[][]): number[][] {
    let status: boolean[] = [];
    let path: number[] = [];
    let paths: number[][] = [];

    for (let index = 0; index < graph.length; index++)
        status[index] = false;

    travel(graph, 0, status, path, paths);

    return paths;
};

function travel(graph: number[][], position: number, status: boolean[], path: number[], paths: number[][]): void {
    if (status[position])
        return;

    path.push(position);

    if (position == graph.length - 1) {
        paths.push(path.concat());
        path.pop();

        return;
    }

    status[position] = true;

    for (let index: number = 0; index < graph[position].length; index++) {
        travel(graph, graph[position][index], status, path, paths);
    }

    status[position] = false;
    path.pop();
}