/**
 * Created by rafaellucio on 20/11/14.
 */
(function () {
	angular.module('myApp').factory('carDataService', CarDataService);

	CarDataService.$inject = ['restService', '$q', 'Car', 'modelTransformer'];

	function CarDataService(restService, $q, Car, modelTransformer) {

		var deferred = $q.defer();
		var cars = restService.one('users.json');
		var service = {
			getList: list
		};

		return service;

		//////////////////////////

		function list() {
			cars.get().then(function (result) {
				deferred.resolve(modelTransformer.transform(result.data.content, Car));
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}
})();