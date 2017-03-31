// Déclaration de ma variable app
var app = angular.module('app', []);
// Ajout du paramètre $http à mon contrôleur pour récuperer la data de mon voiture.json dans ma variable cars
app.controller('carCtrl', function ($scope, $http) {
    $http.get('voiture.json')
            .then(function (res) {
                $scope.cars = res.data;
            });
});
