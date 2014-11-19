(function () {

	angular.module('myApp').controller('MainCtrl', controller);

	controller.$inject = [];

	function controller() {
		var vm = this;

		vm.name = 'Gui';
		vm.sayHello = sayHello;

		function sayHello() {
			this.greeting = 'Hello ' + this.name;
		}
	}
})();