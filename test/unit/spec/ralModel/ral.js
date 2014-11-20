suite('RalModel', function () {
	var Ral;

	setup(module('myApp'));
	setup(inject(function (_Ral_) {
		Ral = _Ral_;
	}));

	suite("RalModel contructor", function () {

		test("should constructor user model", function () {
			assert.equals(10, 10);
		});
	});
});