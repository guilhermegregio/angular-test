/**
 * Created by rafaellucio on 20/11/14.
 */
suite('Car Model', function () {
	var Car;
	var car;
	setup(module('myApp'));
	setup(inject(function (_Car_) {
		Car = _Car_;
		car = new Car({
			id: 1,
			name: 'Gol',
			price: 45000,
			color: 'black'
		});
	}));

	test('deveria criar modelo de carro', function () {
		assert.instanceOf(car, Car, 'deveria criar uma instancia da classe Carro');
	});

	test('deveria ligar o carro', function () {
		car.start();
		assert.equal(car.getStart(), true, 'o carro deveria estar ligado');
		car.stop();
		assert.notEqual(car.getStart(), true, 'o carro não deveria estar ligado');
	});

	test('deveria ter uma cor', function () {
		assert.notEqual(car.color, 'cor do carro não deve ser vermelha');
		assert.property(car, 'color', 'o carro deveria ter a propriedade color no objeto');
	});
});