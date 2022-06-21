import numRollsToTarget from "@problems/numRollsToTarget";
import assert from 'assert';

describe("numRollsToTarget", () => {
    it("should return 651", () => {
        assert.equal(651, numRollsToTarget(5, 6, 15));
    });
})