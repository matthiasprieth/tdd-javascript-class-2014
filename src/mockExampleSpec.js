/*
- wait until image is loaded
- load it into the <img> tag
- rotate image clockwise 90º for every full page height scrolled down
 */

ddescribe('image rotator', function() {
  describe('calcuate angle depending on scroll height', function() {
    it('scroll is 0, rotate by 0 degrees', function() {
      expect(getAngleByScrollOffset(0, 100))
        .toBe(0);
    });
    it('scroll is 250, rotate by 45 degrees', function() {
      var pageHeight = 500;
      expect(getAngleByScrollOffset(250, pageHeight))
        .toBe(45);
    });
    it('scroll is 400 (full page), rotate by 90 degrees', function() {
      var pageHeight = 400;
      expect(getAngleByScrollOffset(400, pageHeight))
        .toBe(90);
    });
  });
});

function getAngleByScrollOffset(scrollOffset, pageHeight) {
  return scrollOffset/pageHeight * 90;
}
