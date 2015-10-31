'use strict';

angular
  .module('game')
  .factory('boardService', boardService);

function boardService(Firebase) {

  return {
    board: function($firebaseObject, id) {
      var newBoard =  {
        'a8': {'isSelected': false, 'piece': '\u2656', 'type': 4},
        'b8': {'isSelected': false, 'piece': '\u2658', 'type': 2},
        'c8': {'isSelected': false, 'piece': '\u2657', 'type': 3},
        'd8': {'isSelected': false, 'piece': '\u2654', 'type': 5},
        'e8': {'isSelected': false, 'piece': '\u2655', 'type': 6},
        'f8': {'isSelected': false, 'piece': '\u2657', 'type': 3},
        'g8': {'isSelected': false, 'piece': '\u2658', 'type': 2},
        'h8': {'isSelected': false, 'piece': '\u2656', 'type': 4},
        'a7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'b7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'c7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'd7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'e7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'f7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'g7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'h7': {'isSelected': false, 'piece': '\u2659', 'type': 1},
        'a6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'b6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'c6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'd6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'e6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'f6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'g6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'h6': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'a5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'b5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'c5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'd5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'e5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'f5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'g5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'h5': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'a4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'b4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'c4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'd4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'e4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'f4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'g4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'h4': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'a3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'b3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'c3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'd3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'e3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'f3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'g3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'h3': {'isSelected': false, 'piece': '\u0020', 'type': 0},
        'a2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'b2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'c2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'd2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'e2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'f2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'g2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'h2': {'isSelected': false, 'piece': '\u265F', 'type': -1},
        'a1': {'isSelected': false, 'piece': '\u265C', 'type': -4},
        'b1': {'isSelected': false, 'piece': '\u265E', 'type': -2},
        'c1': {'isSelected': false, 'piece': '\u265D', 'type': -3},
        'd1': {'isSelected': false, 'piece': '\u265A', 'type': -5},
        'e1': {'isSelected': false, 'piece': '\u265B', 'type': -6},
        'f1': {'isSelected': false, 'piece': '\u265D', 'type': -3},
        'g1': {'isSelected': false, 'piece': '\u265E', 'type': -2},
        'h1': {'isSelected': false, 'piece': '\u265C', 'type': -4}
      };

      var ref = new Firebase('https://chess-project.firebaseio.com/game/' + id);
      var boardRef = ref.child('board');

      var obj = $firebaseObject(boardRef);
      obj.$loaded()
        .then(function(x) {
          if (x.$value === null) {
            for (var key in newBoard) {
              obj[key] = newBoard[key];
            }
            obj.$save();
          }
        });

      return obj;
    }
  };
}
