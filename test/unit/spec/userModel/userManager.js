suite('UserManager', function () {
	var UserManager;
	var $httpBackend;
	var User;
	setup(module('myApp'));
	setup(inject(function (_usersManager_, _UserModel_, _$httpBackend_) {
		UserManager = _usersManager_;
		User = _UserModel_;
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

	suite("UserManager load", function () {

		test("should get list", function () {
			var result;
			var user;

			UserManager.getList().then(function (_result_) {
				result = _result_;
			});

			$httpBackend.flush();

			user = result[0];

			assert.equal(result.length, 1);
			assert.equal(user instanceof User, true);
			assert.equal(user.name, 'Guilherme');
		});
	});
});