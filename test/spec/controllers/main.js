describe('Unit: MainCtrl', function () {

	var mainCtrl;

	beforeEach(module('myApp'));
	beforeEach(inject(function ($controller) {
		mainCtrl = $controller('MainCtrl');
	}));

	describe('AppCtrl', function () {
		it('should create $scope.greeting when calling sayHello', function () {
			mainCtrl.sayHello();

			expect(mainCtrl.greeting).toBe('Hello Gui');
			expect(mainCtrl.name).toBe('Gui');
		});
	});
});