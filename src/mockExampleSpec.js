/*
- wait until image is loaded
- load it into the <img> tag
- rotate image clockwise 90º for every full page height scrolled down
 */

ddescribe('rotate depending on the scroll offset', function() {
  it('scroll is 0, rotate by 0 percent', function() {
    expect(getAngleByScrollOffset(0))
      .toBe(0);
  });
});

function getAngleByScrollOffset() {
  return 0;
}
