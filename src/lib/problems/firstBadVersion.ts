/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        var postgood: number = 0;
        var prebad: number = n;

        while (postgood <= prebad) {
            var index: number = Math.floor((postgood + prebad) / 2);
            if (isBadVersion(index))
                prebad = index - 1;
            else
                postgood = index + 1;
        }

        return prebad + 1;

    };
};