suite('Primeiro', function () {

	var Money;

	setup(module('models'));
	setup(inject(function (_Money_) {
		Money = _Money_;
	}));

	test('should multiplication', function () {
		var five = Money.dollar(5);

		assert.isTrue(Money.dollar(10).equals(five.times(2)));
		assert.isTrue(Money.dollar(15).equals(five.times(3)))

	});

	test('should equality', function () {
		assert.isTrue(Money.franc(5).equals(Money.franc(5)));
		assert.isFalse(Money.franc(5).equals(Money.franc(6)));
		assert.isTrue(Money.dollar(5).equals(Money.dollar(5)));
		assert.isFalse(Money.dollar(5).equals(Money.dollar(6)));
		assert.isFalse(Money.franc(5).equals(Money.dollar(5)));
	});

	test('should franc multiplication', function () {
		var five = Money.franc(5);

		assert.isTrue(Money.franc(10).equals(five.times(2)));
		assert.isTrue(Money.franc(15).equals(five.times(3)));
	});
});

