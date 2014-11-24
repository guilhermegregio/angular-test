/**
 * Created by rafaellucio on 24/11/14.
 */
(function () {
	angular.module('myApp').service('defualtActions', DefualtActions);

	DefualtActions.$inject = ['restService', '$q', 'modelTransformer'];

	/*
	 {
	 create: POST,
	 save: PUT,
	 get: GET, // um item,
	 list: GET, // itens,
	 remove: DELETE
	 }
	 * */

	function DefualtActions(restService, $q, modelTransformer) {
		var service = {
			get: loadOne
		};

		return service;

		////////////////////

		function loadOne(id) {
			var deferred = $q.defer();
			var user = restService.one(this.url, id);
			var dataType = this.dataType.charAt(0).toUpperCase() + this.dataType.substring(1);

			user.get().then(function (result) {
				deferred.resolve(modelTransformer.transform(result.data.content, dataType));
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}
})();