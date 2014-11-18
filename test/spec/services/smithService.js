describe('Unit: SmithService', function () {

	var SmithService;

	beforeEach(module('myApp'));
	beforeEach(inject(function (_SmithService_) {
		SmithService = _SmithService_;
	}));

	describe('SmithService', function () {
		it('should append Smith to a name', function () {
			expect(SmithService.getName('John')).toBe('John Smith');
		});
	});
});