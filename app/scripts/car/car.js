/**
 * Created by rafaellucio on 20/11/14.
 */
(function () {
	angular.module('myApp').value('Car', CarModel);

	var started = false;

	function CarModel(properties) {
		properties = properties || {};
		this.id = properties.id;
		this.name = properties.name;
		this.color = properties.color;
		this.price = properties.price;
	}
	CarModel.prototype.start = function () {
		started = true;
	};
	CarModel.prototype.stop = function () {
		started = false;
	};
	CarModel.prototype.getStart = function () {
		return started;
	};
})();