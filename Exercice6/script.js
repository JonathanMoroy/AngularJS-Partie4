// Déclaration de ma variable app
var app = angular.module('app', []);
// Ajout de la valeur de base de mes variables french et english et des deux fonctions pour les ng-click qui modifie leurs valeurs
app.controller('indexCtrl', function ($scope) {
    $scope.french = true;
    $scope.english = false;
    $scope.showFrench = function () {
        $scope.french = true;
        $scope.english = false;
    };
    $scope.showEnglish = function () {
        $scope.french = false;
        $scope.english = true;
    };
});

