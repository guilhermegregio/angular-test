(function () {

	angular.module('myApp').factory('userDataService', userDataService);

	userDataService.$inject = ['restService', '$q', 'User'];

	function userDataService(restService, $q, User) {

		var deferred = $q.defer();
		var users = restService.one('users.json');

		var service = {
			getList: list
		};

		return service;

		function list() {
			users.get().then(function (result) {

				var arr = [];
				result.data.content.forEach(function (user) {
					arr.push(new User(user));
				});

				deferred.resolve(arr);
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}

})();