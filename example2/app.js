(function (sandbox) {
    'use strict';

    sandbox.String.prototype.replaceAt = function (index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    };

    sandbox.angular.module('example3', [])
    .controller('MainCtrl', function ($scope) {

        $scope.items = createDummyArray(400);

        $scope.calculatePrice = function (item) {
            return roundPrice(item.ppu);
        };

        function roundPrice(price) {
            var priceStr = price.toString();
            var newPrice = priceStr;
            var len = priceStr.length;
            for (var i = len - 1; i >= 4; i--) {
                if (sandbox.parseInt(priceStr[i]) > 5) {
                    newPrice = newPrice.replaceAt([i - 1], sandbox.parseInt(priceStr[i - 1]) + 1);
                }
                newPrice = newPrice.substr(0, i);
            }
            return newPrice;
        }

        function createDummyArray(n) {
            var dummy = [];

            for (var i = n; i >= 0; i--) {
                dummy.push(createDummyReceipt(i));
            }

            return dummy;
        }

        function createDummyReceipt(index) {
            return {
                id: index,
                name: randomName(8),
                status: index % 2 === 0 ? 'delicious' : 'horrible',
                type: 'Cake',
                ppu: sandbox.Math.random() + 4
            };
        }

        function randomName (size) {
            var name = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";

            for( var i=0; i < size; i++ ) {
                name += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return name;
        }
    });
}(this));