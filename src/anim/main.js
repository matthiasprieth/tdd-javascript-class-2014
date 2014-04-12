var jQuery = require('jquery');

function Compass() {
    this._degree = 0;
    this._cardinalPoints = ["North","North-East","East","South-East","South","South-West","West","North-West"];
}
Compass.prototype = {
    updateDegree: function(newDegree) {
        this._degree = newDegree;
    },

    increaseDegree: function(incDegree) {
        this._degree += incDegree;
    },

    getCardinalPoint: function(position) {
        return this._cardinalPoints[position];
    },

    getDegree: function() {
        if(this._degree >= 360 || this._degree < 0){
            this._degree = 0;
        }
        return this._degree;
    },

    getCardinalOrDegree: function() {
        if(this._degree >= 360 || this._degree < 0){
            this._degree = 0;
            return 'North';
        }else if (this._degree%45 === 0){
            return this._cardinalPoints[this._degree/45];
        }
        else{
            return this._degree;
        }
    }
};

var imageEl = jQuery(new Image());
imageEl
    .load(function() {
        jQuery('#compassImage').append(imageEl);
        imageEl.attr('width', '500');
    })
    .attr('src', '/img/compass.png');

function showAndRotateImage(imageId, angle) {
    var image = jQuery('#' + imageId);
    image.show();
    image.css('webkitTransform', 'rotate(' + angle + 'deg)');
}

jQuery(window).scroll(function () {
    showAndRotateImage("compassImage", jQuery(window).scrollTop()/10);
});