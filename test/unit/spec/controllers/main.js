suite('Unit: MainCtrl', function () {

	var mainCtrl;

	setup(module('myApp'));
	setup(inject(function ($controller) {
		mainCtrl = $controller('MainCtrl');
	}));

	suite('AppCtrl', function () {
		test('should create $scope.greeting when calling sayHello', function () {
			mainCtrl.sayHello();

			assert.equal(mainCtrl.greeting, 'Hello Gui');
			assert.equal(mainCtrl.name, 'Gui');
		});
	});
});