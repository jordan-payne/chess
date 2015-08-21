'use strict';

function ChessCtrl($firebaseArray, $firebaseObject, $scope, moveService) {

  var id = 1//Math.round(Math.random() * 100000000);
  var gameRef = new Firebase('https://chess-project.firebaseio.com/game/'+id);
  var msgRef = gameRef.child('messages');
  var turnRef = gameRef.child('turn');
  var moveRef = gameRef.child('move');

  var chess = {
    'turn': $firebaseObject(turnRef),
    'board': board($firebaseObject, id),
    'messages': $firebaseArray(msgRef),
    'move': $firebaseObject(moveRef)
  }

  $scope.messages = chess.messages;

  chess.turn.$bindTo($scope, 'turn').then(function() {
    if ($scope.turn.$value == null) {
      $scope.turn.$value = 'WHITE';
    }
  });
  chess.board.$bindTo($scope, 'board');
  chess.move.$bindTo($scope, 'move');

  $scope.select = function(id) {
    moveService.move($scope, id);
  }

}

chess.controller('ChessCtrl', ChessCtrl);
