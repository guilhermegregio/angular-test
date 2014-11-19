suite('Directive', function () {
	var element;
	var $compile;
	var $scope;

	setup(module('myApp'));
	setup(inject(function (_$compile_, $rootScope) {
		$compile = _$compile_;
		$scope = $rootScope;
		element = angular.element('<div eh-simple>{{2 + 2}}</div>');
		element = $compile(element)($rootScope);
	}));

	test("should equal 4", function () {
		$scope.$digest();
		assert.equal(element.html(), 4);
	});

	suite("ehSimple", function () {
		test("should add a class of plain", function () {
			assert.equal(element.hasClass('plain'), true);
		});
	});
});