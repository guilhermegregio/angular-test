(function () {

	angular.module('myApp').factory('UserModel', userModel);

	userModel.$inject = [];

	function userModel() {

		var UserModel = (function () {
			function UserModel(attrs) {
				attrs = attrs || {};
				this.name = attrs.name;
				this.lastName = attrs.lastName;
			}

			UserModel.prototype.fullName = function () {
				return this.name + ' ' + this.lastName;
			};

			return UserModel;
		})();

		return UserModel;
	}
})();