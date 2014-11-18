(function () {

	angular.module('myApp').value('User', UserModel);

	function UserModel(attributes) {
		this.id = attributes.id;
		this.name = attributes.name;
		this.salary = attributes.salary;
	}

	UserModel.prototype.annualSalary = function () {
		return this.salary * 13;
	};

})();