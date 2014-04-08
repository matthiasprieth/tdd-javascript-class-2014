


  function showAndRotateImage(imageId, angle) {
    var image = jQuery('#' + imageId);
    image.show();
    image.css('webkitTransform', 'rotate(' + angle + 'deg)');
  }




  var jQuery = require('jQuery');

  function Image(imageId) {
    this._imageId = imageId;
  }

  Image.prototype = {

    _getElement: function() {
      return jQuery('#' + this._imageId);
    },

    show: function() {
      this._getElement().show();
    },

    hide: function() {
      this._getElement().hide();
    },

    rotate: function(angle) {
      this._getElement().css('webkitTransform', 'rotate(' + angle + 'deg)');
    }

  };


  function showAndRotateImage(imageId, angle) {
    var image = new Image(imageId);
    image.show();
    image.rotate(angle);
  }

  it('should show the image', function() {
    spyOn(Image.prototype, 'show');

    showAndRotateImage('imageId', 90);
    expect(Image.prototype.show)
      .toHaveBeenCalled();
  });

  it('should rotate the image by 90º', function() {
    spyOn(Image.prototype, 'rotate');

    showAndRotateImage('imageId', 90);
    expect(Image.prototype.rotate)
      .toHaveBeenCalledWith(90);
  });



