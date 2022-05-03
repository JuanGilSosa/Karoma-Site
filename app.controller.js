angular.module("App", [])
    .controller("mainController", mainController);

function mainController ($scope) {
    $scope.titulo = "Alicia";
}