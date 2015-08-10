'use strict';

describe('chessApp.chessBoard module', function() {

  beforeEach(module('chessApp.chessBoard'));

  beforeEach(module('chessApp'));

  describe('chessBoard controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var chessBoardCtrl = $controller('ChessBoardCtrl');
      expect(chessBoardCtrl).toBeDefined();
    }));

  });
});
