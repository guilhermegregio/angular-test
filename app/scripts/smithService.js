(function () {

	angular.module('myApp').service('SmithService', smithService);

	smithService.$inject = [];

	function smithService() {
		var service = {
			getName: getName
		};

		return service;


		function getName(name) {
			return name + ' Smith';
		}
	}
})();