(function () {

	angular.module('myApp').factory('usersManager', usersManager);

	usersManager.$inject = ['restService', '$q', 'modelTransformer'];

	function usersManager(restService, $q, modelTransformer) {

		var deferred = $q.defer();
		var users = restService.one('users.json');

		var service = {
			getList: list
		};

		return service;

		///////////////////////

		function list() {
			users.get().then(function (result) {
				deferred.resolve(modelTransformer.transform(result.data.content, 'User'));
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}
})();