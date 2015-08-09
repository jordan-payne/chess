'use strict';

angular.module('chessApp.chessBoard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-chess-board', {
    templateUrl: 'view-chess-board/chess-board.html',
    controller: 'ChessBoardCtrl'
  });
}])

.controller('ChessBoardCtrl', ['$scope', function(sc) {

}]);
