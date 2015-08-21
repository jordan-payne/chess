'use strict';

function ChessCtrl($firebaseArray, $firebaseObject, $scope, moveService, $routeParams) {

  var gameId = $routeParams.gameId || Math.round(Math.random() * 100000000);

  var gameRef = new Firebase('https://chess-project.firebaseio.com/game/'+gameId);
  var msgRef = gameRef.child('messages');
  var turnRef = gameRef.child('turn');
  var moveRef = gameRef.child('move');

  var chess = {
    'turn': $firebaseObject(turnRef),
    'board': board($firebaseObject, gameId),
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
  // Terrible to do for now to ensure the board is presented properly due
  // to firebase re-ordering object keys.
  $scope.boardOrder = [
    'a8',
    'b8',
    'c8',
    'd8',
    'e8',
    'f8',
    'g8',
    'h8',
    'a7',
    'b7',
    'c7',
    'd7',
    'e7',
    'f7',
    'g7',
    'h7',
    'a6',
    'b6',
    'c6',
    'd6',
    'e6',
    'f6',
    'g6',
    'h6',
    'a5',
    'b5',
    'c5',
    'd5',
    'e5',
    'f5',
    'g5',
    'h5',
    'a4',
    'b4',
    'c4',
    'd4',
    'e4',
    'f4',
    'g4',
    'h4',
    'a3',
    'b3',
    'c3',
    'd3',
    'e3',
    'f3',
    'g3',
    'h3',
    'a2',
    'b2',
    'c2',
    'd2',
    'e2',
    'f2',
    'g2',
    'h2',
    'a1',
    'b1',
    'c1',
    'd1',
    'e1',
    'f1',
    'g1',
    'h1'
  ]

}

chess.controller('ChessCtrl', ChessCtrl);
