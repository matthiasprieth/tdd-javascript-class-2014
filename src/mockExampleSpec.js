var jQuery = require('jQuery');

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

  it('rotate image with the angle, depending on scrollOffset', function() {
    spyOn(rotateImage, 'byAngle');

    rotateImage.byScrollOffset(100, 200);
    expect(rotateImage.byAngle)
      .toHaveBeenCalledWith(45);
  });

  it('should update the angle on every scroll change', function() {
    spyOn(rotateImage, 'byScrollOffset');

    var scrollOffset = 100;
    var pageHeight = 200;
    scrollHandler.pageHeight = pageHeight;
    scrollHandler.scrollDownTo(scrollOffset);

    expect(rotateImage.byScrollOffset)
      .toHaveBeenCalledWith(scrollOffset, pageHeight);
  });
  
});

function getAngleByScrollOffset(scrollOffset, pageHeight) {
  return scrollOffset/pageHeight * 90;
}

var scrollHandler = {
  pageHeight: 0,
  scrollDownTo: function(scrollOffset) {
    rotateImage.byScrollOffset(scrollOffset, scrollHandler.pageHeight);
  }
};


var rotateImage = {
  byScrollOffset: function(scrollOffset, pageHeight) {
    rotateImage.byAngle(getAngleByScrollOffset(scrollOffset, pageHeight));
  },

  byAngle: function(angle) {
    var image = jQuery('#' + imageName);
    image.css('webkitTransform', 'rotate(' + angle + ')');
  }
};

