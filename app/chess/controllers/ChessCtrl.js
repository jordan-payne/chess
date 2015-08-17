'use strict';

function ChessCtrl($rootScope) {
  return new Game($rootScope);
}

chess.controller('ChessCtrl', ['$rootScope', ChessCtrl]);
