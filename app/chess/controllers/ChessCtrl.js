'use strict';

function ChessCtrl($firebaseArray, $firebaseObject, $scope) {

  var msgRef = new Firebase('https://chess-project.firebaseio.com/messages');
  var boardRef = new Firebase('https://chess-project.firebaseio.com/board');

  var chess = game({
      'turn': 'WHITE',
      'move': move({}),
      'board': board({}),
      'messages': $firebaseArray(msgRef)
  });

  $scope.boardState = $firebaseObject(boardRef);
  $scope.boardState.$loaded()
    .then(function(x) {
      if (x.$value == null) {
        for (var prop in newBoard) {
          $scope.boardState[prop] = newBoard[prop];
        }
        $scope.boardState.$save();
      }
    })

  var newBoard = {
    'a8': chess.get_code('a8'),
    'b8': chess.get_code('b8'),
    'c8': chess.get_code('c8'),
    'd8': chess.get_code('d8'),
    'e8': chess.get_code('e8'),
    'f8': chess.get_code('f8'),
    'g8': chess.get_code('g8'),
    'h8': chess.get_code('h8'),
    'a7': chess.get_code('a7'),
    'b7': chess.get_code('b7'),
    'c7': chess.get_code('c7'),
    'd7': chess.get_code('d7'),
    'e7': chess.get_code('e7'),
    'f7': chess.get_code('f7'),
    'g7': chess.get_code('g7'),
    'h7': chess.get_code('h7'),
    'a6': chess.get_code('a6'),
    'b6': chess.get_code('b6'),
    'c6': chess.get_code('c6'),
    'd6': chess.get_code('d6'),
    'e6': chess.get_code('e6'),
    'f6': chess.get_code('f6'),
    'g6': chess.get_code('g6'),
    'h6': chess.get_code('h6'),
    'a5': chess.get_code('a5'),
    'b5': chess.get_code('b5'),
    'c5': chess.get_code('c5'),
    'd5': chess.get_code('d5'),
    'e5': chess.get_code('e5'),
    'f5': chess.get_code('f5'),
    'g5': chess.get_code('g5'),
    'h5': chess.get_code('h5'),
    'a4': chess.get_code('a4'),
    'b4': chess.get_code('b4'),
    'c4': chess.get_code('c4'),
    'd4': chess.get_code('d4'),
    'e4': chess.get_code('e4'),
    'f4': chess.get_code('f4'),
    'g4': chess.get_code('g4'),
    'h4': chess.get_code('h4'),
    'a3': chess.get_code('a3'),
    'b3': chess.get_code('b3'),
    'c3': chess.get_code('c3'),
    'd3': chess.get_code('d3'),
    'e3': chess.get_code('e3'),
    'f3': chess.get_code('f3'),
    'g3': chess.get_code('g3'),
    'h3': chess.get_code('h3'),
    'a2': chess.get_code('a2'),
    'b2': chess.get_code('b2'),
    'c2': chess.get_code('c2'),
    'd2': chess.get_code('d2'),
    'e2': chess.get_code('e2'),
    'f2': chess.get_code('f2'),
    'g2': chess.get_code('g2'),
    'h2': chess.get_code('h2'),
    'a1': chess.get_code('a1'),
    'b1': chess.get_code('b1'),
    'c1': chess.get_code('c1'),
    'd1': chess.get_code('d1'),
    'e1': chess.get_code('e1'),
    'f1': chess.get_code('f1'),
    'g1': chess.get_code('g1'),
    'h1': chess.get_code('h1')
  }

  return chess;
}

chess.controller('ChessCtrl', ChessCtrl);
