(function () {

	angular.module('myApp', ['restangular']);

	//angular.module('myApp').run(function (User, userDataService, $filter) {
	//
	//	userDataService.getList().then(function (result) {
	//		result.forEach(function (user) {
	//			console.log($filter('currency')(user.annualSalary()));
	//		})
	//	}, function (error) {
	//		console.log(error);
	//	});
	//});

})();