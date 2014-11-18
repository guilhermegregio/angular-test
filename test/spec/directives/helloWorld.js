describe('Directive', function () {
	var element;
	var $compile;
	var $scope;
	beforeEach(module('myApp'));
	beforeEach(inject(function (_$compile_, $rootScope) {
		$compile = _$compile_;
		$scope = $rootScope;
		element = angular.element('<div eh-simple>{{2 + 2}}</div>');
		element = $compile(element)($rootScope);
	}));

	it("should equal 4", function () {
		$scope.$digest();
		expect(element.html()).toBe('4');
	});

	describe("ehSimple", function () {
		it("should add a class of plain", function () {
			expect(element.hasClass('plain')).toBe(true);
		});
	});
});