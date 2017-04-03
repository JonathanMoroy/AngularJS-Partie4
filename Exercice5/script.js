// Déclaration de ma variable app
var app = angular.module('app', []);
// Ajout de la valeur de base de ma variable scare et des deux fonctions pour les ng-click qui modifie sa valeur
app.controller('indexCtrl', function ($scope) {
    $scope.scare = true;
    $scope.showScare = function () {
        $scope.scare = true;
    };
    $scope.hideScare = function () {
        $scope.scare = false;
    };
});
