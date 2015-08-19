'use strict';

function piece(spec) {

  var that = {};

  switch(spec.code) {
    case '\u0020':
      spec.color = 'NEUTRAL';
      break;
    case '\u2654':
      spec.color = 'WHITE';
      break;
    case '\u2655':
      spec.color = 'WHITE';
      break;
    case '\u2656':
      spec.color = 'WHITE';
      break;
    case '\u2657':
      spec.color = 'WHITE';
      break;
    case '\u2658':
      spec.color = 'WHITE';
      break;
    case '\u2659':
      spec.color = 'WHITE';
      break;
    default:
      spec.color = 'BLACK';
  }

  that.get_code = function() {
    return spec.code;
  }

  that.get_color = function() {
    return spec.color;
  }

  return that;

}

chess.factory('piece', function() {
  return piece;
})
