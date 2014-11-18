describe('UserDataService', function () {
	var UserDataService;
	var $httpBackend;
	var User;
	beforeEach(module('myApp'));
	beforeEach(inject(function (_userDataService_, _User_, _$httpBackend_) {
		UserDataService = _userDataService_;
		User = _User_;
		$httpBackend = _$httpBackend_;

		$httpBackend.whenGET("/test-model/service/users.json").respond({
			content: [
				{
					id: 1,
					name: 'Guilherme',
					salary: 1000
				}
			],
			numberOfResults: 1
		});

	}));

	describe("UserDataService load", function () {

		it("should get list", function () {
			var result;
			var user;

			UserDataService.getList().then(function (_result_) {
				result = _result_;
			});

			$httpBackend.flush();

			user = result[0];

			expect(result.length).toBe(1);
			expect(user instanceof User).toBe(true);
			expect(user.name).toBe('Guilherme');
			expect(user.annualSalary()).toBe(13000);
		});
	});

});