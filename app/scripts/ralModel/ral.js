(function () {
	angular.module('myApp').value('Ral', RalModel);

	function RalModel(properties) {
		properties = properties || {};
		this.id = properties.id;
		this.name = properties.name;
		this.lastName = properties.lastName;

	}
})();