'use strict';

angular
  .module('game')
  .factory('boardService', boardService);

function boardService() {

  return {
    board: function($firebaseObject, id) {
      var newBoard =  {
        'a8': {'isSelected': false, 'piece': '\u2656'},
        'b8': {'isSelected': false, 'piece': '\u2658'},
        'c8': {'isSelected': false, 'piece': '\u2657'},
        'd8': {'isSelected': false, 'piece': '\u2655'},
        'e8': {'isSelected': false, 'piece': '\u2654'},
        'f8': {'isSelected': false, 'piece': '\u2657'},
        'g8': {'isSelected': false, 'piece': '\u2658'},
        'h8': {'isSelected': false, 'piece': '\u2656'},
        'a7': {'isSelected': false, 'piece': '\u2659'},
        'b7': {'isSelected': false, 'piece': '\u2659'},
        'c7': {'isSelected': false, 'piece': '\u2659'},
        'd7': {'isSelected': false, 'piece': '\u2659'},
        'e7': {'isSelected': false, 'piece': '\u2659'},
        'f7': {'isSelected': false, 'piece': '\u2659'},
        'g7': {'isSelected': false, 'piece': '\u2659'},
        'h7': {'isSelected': false, 'piece': '\u2659'},
        'a6': {'isSelected': false, 'piece': '\u0020'},
        'b6': {'isSelected': false, 'piece': '\u0020'},
        'c6': {'isSelected': false, 'piece': '\u0020'},
        'd6': {'isSelected': false, 'piece': '\u0020'},
        'e6': {'isSelected': false, 'piece': '\u0020'},
        'f6': {'isSelected': false, 'piece': '\u0020'},
        'g6': {'isSelected': false, 'piece': '\u0020'},
        'h6': {'isSelected': false, 'piece': '\u0020'},
        'a5': {'isSelected': false, 'piece': '\u0020'},
        'b5': {'isSelected': false, 'piece': '\u0020'},
        'c5': {'isSelected': false, 'piece': '\u0020'},
        'd5': {'isSelected': false, 'piece': '\u0020'},
        'e5': {'isSelected': false, 'piece': '\u0020'},
        'f5': {'isSelected': false, 'piece': '\u0020'},
        'g5': {'isSelected': false, 'piece': '\u0020'},
        'h5': {'isSelected': false, 'piece': '\u0020'},
        'a4': {'isSelected': false, 'piece': '\u0020'},
        'b4': {'isSelected': false, 'piece': '\u0020'},
        'c4': {'isSelected': false, 'piece': '\u0020'},
        'd4': {'isSelected': false, 'piece': '\u0020'},
        'e4': {'isSelected': false, 'piece': '\u0020'},
        'f4': {'isSelected': false, 'piece': '\u0020'},
        'g4': {'isSelected': false, 'piece': '\u0020'},
        'h4': {'isSelected': false, 'piece': '\u0020'},
        'a3': {'isSelected': false, 'piece': '\u0020'},
        'b3': {'isSelected': false, 'piece': '\u0020'},
        'c3': {'isSelected': false, 'piece': '\u0020'},
        'd3': {'isSelected': false, 'piece': '\u0020'},
        'e3': {'isSelected': false, 'piece': '\u0020'},
        'f3': {'isSelected': false, 'piece': '\u0020'},
        'g3': {'isSelected': false, 'piece': '\u0020'},
        'h3': {'isSelected': false, 'piece': '\u0020'},
        'a2': {'isSelected': false, 'piece': '\u265F'},
        'b2': {'isSelected': false, 'piece': '\u265F'},
        'c2': {'isSelected': false, 'piece': '\u265F'},
        'd2': {'isSelected': false, 'piece': '\u265F'},
        'e2': {'isSelected': false, 'piece': '\u265F'},
        'f2': {'isSelected': false, 'piece': '\u265F'},
        'g2': {'isSelected': false, 'piece': '\u265F'},
        'h2': {'isSelected': false, 'piece': '\u265F'},
        'a1': {'isSelected': false, 'piece': '\u265C'},
        'b1': {'isSelected': false, 'piece': '\u265E'},
        'c1': {'isSelected': false, 'piece': '\u265D'},
        'd1': {'isSelected': false, 'piece': '\u265B'},
        'e1': {'isSelected': false, 'piece': '\u265A'},
        'f1': {'isSelected': false, 'piece': '\u265D'},
        'g1': {'isSelected': false, 'piece': '\u265E'},
        'h1': {'isSelected': false, 'piece': '\u265C'}
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
  }
}
