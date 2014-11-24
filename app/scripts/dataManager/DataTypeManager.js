(function () {

	angular.module('myApp').factory('dataTypeManager', dataTypeManager);

	dataTypeManager.$inject = ['$injector'];

	function dataTypeManager($injector) {

		var service = {
			onType: onType
		};

		return service;

		function onType(managerName) {
			return $injector.get(managerName+'Manager');
		}
	}
})();