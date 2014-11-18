(function () {
	angular.module('myApp').factory('restService', restService);

	restService.$inject = ['Restangular'];

	function restService(Restangular) {
		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setFullResponse(true);
			RestangularConfigurer.setBaseUrl('/test-model/service');
			RestangularConfigurer.setDefaultHeaders({
				Authorization: 'Bearer 2341234adscqw34s'
			});
		});
	}
})();