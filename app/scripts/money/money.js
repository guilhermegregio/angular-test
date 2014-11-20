(function () {
	angular.module('models').factory('Money', MoneyFactory);

	MoneyFactory.$inject = [];

	function MoneyFactory() {

		var Money = (function () {
			function Money(amount, currency) {
				this.amount = amount;
				this.currency = currency;
			}

			Money.prototype.times = function (multiplier) {
				return new Money(this.amount * multiplier, this.currency);
			};

			Money.prototype.equals = function (money) {
				return this.currency === money.currency && this.amount === money.amount;
			};

			Money.dollar = function (amount) {
				return new Money(amount, 'USD');
			};

			Money.franc = function (amount) {
				return new Money(amount, 'CHF');
			};

			return Money;
		})();

		return Money;
	}

})();