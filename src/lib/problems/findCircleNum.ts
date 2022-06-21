export default function findCircleNum(isConnected: number[][]): number {
    let result: number = 0;
    for (let index: number = 0; index < isConnected.length; index++)
        for (let sub_index: number = 0; sub_index < isConnected[index].length; sub_index++) {
            if (isConnected[index][sub_index] == 1) {
                result++;
                isConnected = markProvince(isConnected, index);
            }
        }
    return result;
};

function markProvince(isConnected: number[][], x: number): number[][] {
    if (x < 0 || x >= isConnected.length || isConnected[x][x] == 0)
        return isConnected;

    isConnected[x][x] = 0;

    for (let index: number = 0; index < isConnected[x].length; index++) {
        if (isConnected[x][index] == 1) {
            isConnected = markProvince(isConnected, index);
            isConnected[x][index] = 0;
        }
    }

    return isConnected;
}