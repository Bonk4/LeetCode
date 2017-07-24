//--TwoSum.js--//

//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
exports.calc = function (nums, target) {
    for(i = 0; i < nums.length; i++) {
        for(j = 0; j < nums.length; j++) {
            if (i == j) { break; }
            else if (nums[i] + nums[j] === target) 
            { 
                if (i > j) {
                    return [j, i]  
                }
                return [i, j] 
            }
        }
    }
};