(function () {

	angular.module('myApp').filter('reverse', reverseFilter);

	function reverseFilter() {
		return function (text) {
			return text.split('').reverse().join('');
		}
	}
})();