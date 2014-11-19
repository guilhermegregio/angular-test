suite('Primeiro', function () {

	var Dollar;

	setup(module('models'));
	setup(inject(function (_Dollar_) {
		Dollar = _Dollar_;
	}));

	test('should multiplication', function () {
		var five = new Dollar(5);
		var product = five.times(2);

		assert.equal(10, product.amount);

		product = five.times(3);

		assert.equal(15, product.amount);
	});
});

