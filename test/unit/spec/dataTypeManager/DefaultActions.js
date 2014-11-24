/**
 * Created by rafaellucio on 24/11/14.
 */
suite('Default Actions', function () {
	var DefaultActions,
		$httpBackend;
	setup(module('myApp'));
	setup(inject(function (_defualtActions_, _$httpBackend_) {
		DefaultActions = _defualtActions_;
		$httpBackend = _$httpBackend_;

		$httpBackend.whenGET("/test-model/service/users/1").respond({
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

	test('should be defined a method get', function () {
		assert.isFunction(DefaultActions.get);
	});

	test('should return one user', function () {
		var result;
		var manager = {
			dataType: 'user',
			url: 'users',
			get: DefaultActions.get
		};

		manager.get(1).then(function (_result_) {
			result = _result_;
		});

		$httpBackend.flush();

		var user = result[0];
		assert.equal(result.length, 1, 'should return one user');
		assert.equal(user.constructor.name, 'UserModel');
	});
});