(function () {
	angular.module('models').value('Dollar', Dollar);


	function Dollar(amount) {
		this.amount = amount;
	}

	Dollar.prototype.times = function (multiplier) {
		return new Dollar(this.amount * multiplier);
	};

})();