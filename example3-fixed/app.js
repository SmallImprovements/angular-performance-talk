
angular.module('app', [])
	.run(function ($rootScope) {
		var i = 1000;
		$rootScope.numbers = [];
		for (; i !== 0; i--) {
			$rootScope.numbers.push(i);
		}

		$rootScope.numbers.reverse();
	});