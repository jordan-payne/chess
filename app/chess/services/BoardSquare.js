'use strict';

function square(spec) {

  var that = {};

  that.is_selected = function() {
    return spec.isSelected;
  }

  that.select = function() {
    spec.isSelected = !spec.isSelected;
  }

  that.get_piece = function() {
    return spec.piece;
  }

  that.set_piece = function(piece) {
    spec.piece = piece;
  }

  that.get_coordinate = function() {
    return spec.coordinate;
  }

  return that;

}

chess.factory('square', function(spec) {
  return square;
})
