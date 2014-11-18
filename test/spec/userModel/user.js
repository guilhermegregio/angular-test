describe('UserModel', function () {
	var User;

	beforeEach(module('myApp'));
	beforeEach(inject(function (_User_) {
		User = _User_;
	}));

	describe("UserModel contructor", function () {

		it("should constructor user model", function () {
			var user = new User({name: 'Guilherme'});

			expect(user.name).toBe('Guilherme');
		});

		it("should show 40000 annual salary", function () {
			var user = new User({name: 'Guilherme', salary: 4500});

			expect(user.annualSalary()).toBe(58500);
		});

	});

});