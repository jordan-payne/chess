'use strict';

chess.factory('Rules', function() {

  var isYourTurn = function(move) {
    return true;
  }

  var isLegal = function(move) {
    return true;
  }

  return {
    isYourTurn: isYourTurn,
    isLegal: isLegal
  }
});
