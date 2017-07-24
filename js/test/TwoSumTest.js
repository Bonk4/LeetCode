var test = require('tape');
var twoSum = require('../solutions/TwoSum');

test('should return [1,2] when given [3,2,6] and 6', function (assert) {
	var outcome = twoSum.calc([3,2,4], 6);
	var expected = [1,2];

	assert.deepEqual(expected, outcome);
	assert.end();
});