describe('Filter', function () {
	var reverseFilter;

	beforeEach(module('myApp'));
	beforeEach(inject(function (_reverseFilter_) {
		reverseFilter = _reverseFilter_;
	}));

	describe("Reverse", function () {
		it("should reverse a string", function () {
			expect(reverseFilter('ABCD')).toEqual('DCBA');
			expect(reverseFilter('John')).toEqual('nhoJ');
		});
	});
});