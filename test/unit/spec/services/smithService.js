suite('Unit: SmithService', function () {

	var SmithService;

	setup(module('myApp'));
	setup(inject(function (_SmithService_) {
		SmithService = _SmithService_;
	}));

	suite('SmithService', function () {
		test('should append Smith to a name', function () {
			assert.equal(SmithService.getName('John'), 'John Smith');
		});
	});
});