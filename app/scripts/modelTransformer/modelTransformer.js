(function () {

	angular.module('myApp').factory("modelTransformer", ModelTransformer);

	ModelTransformer.inject = ['$injector'];

	function ModelTransformer($injector) {

		var service = {
			transform: transformResult
		};

		return service;

		////////////////////////

		function transformObject(jsonResult, modelName) {
			var constructor = $injector.get(modelName+'Model');
			var model = new constructor();
			angular.extend(model, jsonResult);
			return model;
		}

		function transformResult(jsonResult, modelName) {
			if (angular.isArray(jsonResult)) {
				var models = [];
				angular.forEach(jsonResult, function (object) {
					models.push(transformObject(object, modelName));
				});
				return models;
			} else {
				return transformObject(jsonResult, modelName);
			}
		}
	}
})();