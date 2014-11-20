(function () {
	angular.module('models').factory('Dollar', DollarFactory);

	DollarFactory.$inject = ['Money'];

	function DollarFactory(Money) {

		var Dollar = (function (_super) {
			__extends(Dollar, _super);
			function Dollar() {
				_super.apply(this, arguments);
				this.currency = 'USD';
			}

			return Dollar;
		})(Money);

		return Dollar;
	}

})();