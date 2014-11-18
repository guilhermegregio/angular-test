(function () {
	angular.module('myApp').directive('ehSimple', ehSimple);

	ehSimple.$inject = [];

	function ehSimple() {
		var directive = {
			link: link,
			scope: {}
		};
		return directive;

		function link(scope, element) {
			element.addClass('plain');

			element.bind('click', function () {
				scope.clicked = false;
			})
		}
	}

})();