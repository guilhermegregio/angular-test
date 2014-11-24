/**
 * Created by rafaellucio on 21/11/14.
 */
suite('DataType Model', function () {
	var DataTypeManager;
	var UsersManager;
	/* SETUP */
	setup(module('myApp'));
	setup(inject(function (_dataTypeManager_, _usersManager_) {
		DataTypeManager = _dataTypeManager_;
		UsersManager = _usersManager_;
	}));

	test('Data Type Manager Factory', function () {
		var userManager = DataTypeManager.onType('users');
		assert.property(userManager, 'getList');
	});

	test('Data Type Manager Factory', function () {
		var userManager = DataTypeManager.onType('users');
		assert.deepEqual(userManager, UsersManager, 'should be equals');
	});
});