// Déclaration de ma variable app
var app = angular.module('app', []);
// Ajout de ma variable count à mon contrôleur buttonCtrl
app.controller('buttonCtrl', ['$scope', function ($scope) {
        $scope.count = 0;
    }]);