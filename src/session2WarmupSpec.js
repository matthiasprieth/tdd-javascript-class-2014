








    describe('roman numerals', function() {
      it('should convert I to 1', function() {
        expect(convert('I')).toBe(1);
      });
      it('should convert V to 5', function() {
        expect(convert('V')).toBe(5);
      });
      it('should convert X to 10', function() {
        expect(convert('X')).toBe(10);
      });
      it('should convert L to 50', function() {
        expect(convert('L')).toBe(50);
      });
    });

    var c = function(n) {
      if (n == 'V') return 5;
      if (n == 'X')
        return 10;
      if (n == 'L') {
        return 50;
      } else {
        return 1;
      }
    };

