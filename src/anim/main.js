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
var compassEl = new Compass();

imageEl
    .load(function() {
        jQuery('#compassImage').append(imageEl);
        imageEl.attr('width', '500');
    })
    .attr('src', '/img/compass.png');

function showAndRotateImage(imageId) {
    var image = jQuery('#' + imageId);
    image.show();
    image.css('webkitTransform', 'rotate(' + compassEl.getDegree() + 'deg)');
}

function showAndUpdateText(fieldId) {
    var field = document.getElementById(fieldId);
    field.innerHTML = compassEl.getCardinalOrDegree();
}

jQuery(window).scroll(function () {
    compassEl.updateDegree(parseInt((jQuery(window).scrollTop()/20)%360));
    showAndRotateImage("compassImage");
    showAndUpdateText("directionHeading");
});
