function searchMatrix(matrix: number[][], target: number): boolean {
    for (let index = 0; index < matrix.length; index++) {
        if (matrix[index][0] <= target && matrix[index][matrix[index].length - 1] >= target)
            if (search(matrix[index], target) != -1)
                return true;
            else
                return false;
    }

    return false;
};

function search(nums: number[], target: number): number {
    var last: number = nums.length - 1;
    var first: number = 0;

    while (first <= last) {
        var index = Math.floor((first + last) / 2);

        if (nums[index] == target)
            return index;
        else if (nums[index] > target)
            last = index - 1;
        else
            first = index + 1;

    }

    return -1;
};