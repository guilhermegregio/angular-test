(function () {

	angular.module('myApp').factory('userDataService', userDataService);

	userDataService.$inject = ['restService', '$q', 'User', 'modelTransformer'];

	function userDataService(restService, $q, User, modelTransformer) {

		var deferred = $q.defer();
		var users = restService.one('users.json');

		var service = {
			getList: list
		};

		return service;

		function list() {
			users.get().then(function (result) {
				deferred.resolve(modelTransformer.transform(result.data.content, User));
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}

})();