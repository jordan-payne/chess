'use strict';

angular
  .module('game')
  .factory('moveService', moveService);

function moveService() {

  var listBishopMoves = function(position) {

    var positionObj = generateBoardPositionObject(position);

    var validMoves = [];

    var i = positionObj.column;
    var j = positionObj.row;
    while(i < 8 && j > 1) {
      i = i + 1;
      j = j - 1;
      validMoves.push(generateKeyFromBoardPositionObject({column: i, row: j}));
    }

    i = positionObj.column;
    j = positionObj.row;
    while(i > 1 && j > 1) {
      i = i - 1;
      j = j - 1;
      validMoves.push(generateKeyFromBoardPositionObject({column: i, row: j}));
    }

    i = positionObj.column;
    j = positionObj.row;
    while(i < 8 && j < 8) {
      i = i + 1;
      j = j + 1;
      validMoves.push(generateKeyFromBoardPositionObject({column: i, row: j}));
    }

    i = positionObj.column;
    j = positionObj.row;
    while(i > 1 && j < 8) {
      i = i - 1;
      j = j + 1;
      validMoves.push(generateKeyFromBoardPositionObject({column: i, row: j}));
    }

    return validMoves;

  };

  var generateBoardPositionObject = function(position) {
    var column = position.substring(0,1).charCodeAt(0) - 96;
    var row = parseInt(position.substring(1,2));
    return {column: column, row: row}
  };

  var generateKeyFromBoardPositionObject = function(positionObj) {
    var letter = positionObj.column + 96;
    letter = String.fromCharCode(letter);

    var number = String.fromCharCode(48 + positionObj.row);
    var key = letter + number;
    return key;
  };

  return {
    move: function(s, id) {
      s.board[id].isSelected = !s.board[id].isSelected;
      var color;
      switch(s.board[id].piece) {
        case '\u0020':
          color = 'NEUTRAL';
          break;
        case '\u2654':
          color = 'WHITE';
          break;
        case '\u2655':
          color = 'WHITE';
          break;
        case '\u2656':
          color = 'WHITE';
          break;
        case '\u2657':
          color = 'WHITE';
          break;
        case '\u2658':
          color = 'WHITE';
          break;
        case '\u2659':
          color = 'WHITE';
          break;
        default:
          color = 'BLACK';
      }

      if (s.board[id].type === 3) {
        s.messages.$add({'text': 'White Bishop selected.'})
        console.log(listBishopMoves(id, s.board));
      }

      if (typeof s.move.capturingSquare == 'undefined') {
        s.move.capturingColor = color;
        switch(s.move.capturingColor) {
          case s.turn.$value:
            s.move.capturingPiece = s.board[id].piece;
            s.move.capturingSquare = id;
            s.messages.$add({'text': 'Select: ' + s.move.capturingPiece});
            break;
          default:
            s.messages.$add({'text': 'Illegal: Not your turn.'});
            s.board[id].isSelected = false;
            break;
        }
      } else {
        switch(color) {
          case s.turn.$value:
            s.messages.$add({'text': 'You cannot capture your own piece.'});
            s.board[s.move.capturingSquare].isSelected = false;
            s.board[id].isSelected = false;
            s.move = {};
            break;
          case 'NEUTRAL':
            s.messages.$add({'text': s.move.capturingPiece+s.move.capturingSquare+id});
            s.board[s.move.capturingSquare].isSelected = false;
            s.board[id].isSelected = false;
            s.board[id].piece = s.move.capturingPiece;
            s.board[s.move.capturingSquare].piece = '\u0020';
            s.turn.$value = s.turn.$value.localeCompare('BLACK') === 0 ? 'WHITE' : 'BLACK';
            s.move = {};
            break;
          default:
            s.messages.$add({'text': s.move.capturingPiece+s.move.capturingSquare+id+s.board[id].piece});
            s.board[s.move.capturingSquare].isSelected = false;
            s.board[id].isSelected = false;
            s.board[id].piece = s.move.capturingPiece;
            s.board[s.move.capturingSquare].piece = '\u0020';
            s.turn.$value = s.turn.$value.localeCompare('BLACK') === 0 ? 'WHITE' : 'BLACK';
            s.move = {};
        }
      }
    }
  };

}
