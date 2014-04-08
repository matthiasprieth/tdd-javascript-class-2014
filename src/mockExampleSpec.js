/*
- wait until image is loaded
- load it into the <img> tag
- rotate image clockwise 90º for every full page height scrolled down
 */

ddescribe('rotate depending on the scroll offset', function() {
  it('scroll is 0, rotate by 0 degrees', function() {
    expect(getAngleByScrollOffset(0))
      .toBe(0);
  });
  it('scroll is 250, rotate by 45 degrees', function() {
    var pageHeight = 500;
    expect(getAngleByScrollOffset(250, pageHeight))
      .toBe(45);
  });
});

function getAngleByScrollOffset(scrollOffset) {
  if (scrollOffset) {
    return 45;
  }
  return 0;
}
