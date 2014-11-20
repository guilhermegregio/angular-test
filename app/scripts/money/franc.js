(function () {
	angular.module('models').factory('Franc', FrancFactory);

	FrancFactory.$inject = ['Money'];

	function FrancFactory(Money) {

		var Franc = (function (_super) {
			__extends(Franc, _super);
			function Franc() {
				_super.apply(this, arguments);
				this.currency = 'CHF';
			}

			return Franc;
		})(Money);

		return Franc;
	}

})();