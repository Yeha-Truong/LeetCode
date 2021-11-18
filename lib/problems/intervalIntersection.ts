function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    var i: number = 0;
    var j: number = 0;
    let result: number[][] = [];

    while (i < firstList.length && j < secondList.length) {
        if (firstList[i][1] < secondList[j][0]) {
            i++;
            continue;
        }

        if (firstList[i][0] > secondList[j][1]) {
            j++;
            continue;
        }
        let section: number[] = [Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])];

        result.push(section);

        if (section[1] == firstList[i][1])
            i++;
        else
            j++;
    }

    return result;
};