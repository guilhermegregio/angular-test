/**
 * Created by rafaellucio on 20/11/14.
 */
suite('Car Data Service', function () {
	var Car;
	var $httpBackend;
	var carDataService;

	setup(module('myApp'));
	setup(inject(function (_$httpBackend_, _Car_, _carDataService_) {
		Car = _Car_;
		$httpBackend = _$httpBackend_;
		carDataService = _carDataService_;

		$httpBackend.whenGET('/test-model/service/users.json').respond({
			content: [
				{
					id: 1,
					name: 'Gol',
					price: 55000
				},
				{
					id: 2,
					name: 'Gol',
					price: 45000
				}
			],
			numberOfResults: 2
		});
	}));

	test('deveria retornar a resposta do servidor', function () {
		var result;
		var car;

		carDataService.getList().then(function (_result_) {
			result = _result_;
		});

		$httpBackend.flush();

		assert.equal(result.length, 2, 'deveria retornar dois objetos');
	});

	test('deveria atribuir as propriedades a variável', function () {
		var result;
		var car;

		carDataService.getList().then(function (_result_) {
			result = _result_;
		});

		$httpBackend.flush();

		car = result[1];

		assert.equal(car.id, 2, 'deveria existir a propriedade id');
		assert.property(car, 'getStart', 'deveria existir a propriedade getStart');
		assert.equal(car.getStart(), false, 'deveria estar desligado');
		car.start();
		assert.equal(car.getStart(), true, 'deveria estar ligado');
	});
});