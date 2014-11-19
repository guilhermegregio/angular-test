suite('UserModel', function () {
	var User;

	setup(module('myApp'));
	setup(inject(function (_User_) {
		User = _User_;
	}));

	suite("UserModel contructor", function () {

		test("should constructor user model", function () {
			var user = new User({name: 'Guilherme'});

			assert.equal(user.name, 'Guilherme');
		});

		test("should show 40000 annual salary", function () {
			var user = new User({name: 'Guilherme', salary: 4500});

			assert.equal(user.annualSalary(), 58500);
		});

	});

});