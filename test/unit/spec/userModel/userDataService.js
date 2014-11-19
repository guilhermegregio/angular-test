suite('UserDataService', function () {
	var UserDataService;
	var $httpBackend;
	var User;
	setup(module('myApp'));
	setup(inject(function (_userDataService_, _User_, _$httpBackend_) {
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

	suite("UserDataService load", function () {

		test("should get list", function () {
			var result;
			var user;

			UserDataService.getList().then(function (_result_) {
				result = _result_;
			});

			$httpBackend.flush();

			user = result[0];

			assert.equal(result.length, 1);
			assert.equal(user instanceof User, true);
			assert.equal(user.name, 'Guilherme');
			assert.equal(user.annualSalary(), 13000);
		});
	});

});