'use strict';

function ChessCtrl() {
  var chess = game({
      'turn': 0,
      'move': {},
      'board': board({}),
      'messages': []
  });

  return chess;
}

chess.controller('ChessCtrl', [ChessCtrl]);
