/**
 * Created by rafaellucio on 24/11/14.
 */
suite('Model Transformer', function () {
	var User;
	var ModelTransformer;
	setup(module('myApp'));
	setup(inject(function (_modelTransformer_, _UserModel_) {
		User = _UserModel_;
		ModelTransformer = _modelTransformer_;
	}));

	test('should be defined method transform', function () {
		assert.isFunction(ModelTransformer.transform);
	});

	test('should be injected a model of User with String parameter', function () {
		var user1 = ModelTransformer.transform({}, 'User');
		var user2 = new User();
		assert.deepEqual(user1, user2);
	});
});