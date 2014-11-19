suite('Filter', function () {
	var reverseFilter;

	setup(module('myApp'));
	setup(inject(function (_reverseFilter_) {
		reverseFilter = _reverseFilter_;
	}));

	suite("Reverse", function () {
		test("should reverse a string", function () {
			assert.equal(reverseFilter('ABCD'), 'DCBA');
			assert.equal(reverseFilter('John'), 'nhoJ');
		});
	});
});