'use strict';

function move(spec) {

  var that = {};

  that.get_capturing_square = function() {
    return spec.capturingSquare;
  }

  that.set_capturing_square = function(square) {
    spec.capturingSquare = square;
  }

  return that;

}

chess.factory('move', function() {
  return move;
});
