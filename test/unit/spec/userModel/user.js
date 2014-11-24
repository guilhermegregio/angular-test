suite('UserModel', function () {
	var User;

	setup(module('myApp'));
	setup(inject(function (_UserModel_) {
		User = _UserModel_;
	}));

	suite("UserModel contructor", function () {

		test("should constructor user model", function () {
			var user = new User({name: 'Guilherme'});

			assert.equal(user.name, 'Guilherme');
		});
	});
});