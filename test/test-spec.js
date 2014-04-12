function Image(imageId) {
    this._imageId = imageId;
}
Image.prototype = {

    show: function() {
        //this._getElement().show();
    },

    rotate: function(angle) {
        //this._getElement().css('webkitTransform', 'rotate(' + angle + 'deg)');
    }
};

function Field(text) {
    this.fieldText = text;
}
Field.prototype = {

    updateText: function(text) {
        this.fieldText = text;
    },

    getText: function() {
        return this.fieldText;
    }
};

function Compass() {
    this.degree = 0;
    this.cardinalPoints = ["North","North-East","East","South-East","South","South-West","West","North-West"];
}
Compass.prototype = {
    setDegree: function(newDegree) {
        this.degree = newDegree;
    },

    increaseDegree: function(incDegree) {
        this.degree += incDegree;
    },

    getCardinalPoint: function(position) {
        return this.cardinalPoints[position];
    },

    getDegree: function() {
        if(this.degree >= 360 || this.degree < 0){
            this.degree = 0;
        }
        return this.degree;
    },

    getCardinalOrDegree: function() {
        if(this.degree >= 360 || this.degree < 0){
            this.degree = 0;
            return 'North';
        }else if (this.degree%45 === 0){
            return this.cardinalPoints[this.degree/45];
        }
        else{
            return this.degree;
        }
    }
};

function showAndRotateImage(imageId, angle) {
    var image = new Image(imageId);
    image.show();
    image.rotate(angle);
}

function showAndUpdateText(text) {
    var field = new Field();
    field.updateText(text);
}

describe("Compass", function() {

    var myImage;
    var myCompass;

    beforeEach(function(){
       myImage = new Image('imageId');
       myCompass = new Compass();
    });

    it("compass should get cardinal point every 45 degree", function() {
        for (var i=0;i<8;i++){
            expect(myCompass.getCardinalOrDegree()).toEqual(myCompass.getCardinalPoint(i));
            myCompass.increaseDegree(45);
        }
    });
    it("compass should check if out of range", function() {
        for (var i=360;i<=370;i++){
           expect(myCompass.getCardinalOrDegree(i)).toEqual('North');
        }
        for (var i=0;i>=-10;i--){
           expect(myCompass.getCardinalOrDegree(i)).toEqual('North');
        }
    });
    it("angle 90 should rotate with angle 90", function() {
        spyOn(Image.prototype, 'rotate');
        myCompass.setDegree(90);
        showAndRotateImage('imageId', myCompass.getDegree());

        expect(Image.prototype.rotate).toHaveBeenCalledWith(90);
    });
    it("angle 90 should show Text East", function() {
        spyOn(Field.prototype, 'updateText');
        myCompass.setDegree(90);
        showAndUpdateText(myCompass.getCardinalOrDegree());

        expect(Field.prototype.updateText).toHaveBeenCalledWith("East");
    });
    it("angle 50 should show Text 50", function() {
        spyOn(Field.prototype, 'updateText');
        myCompass.setDegree(50);
        showAndUpdateText(myCompass.getCardinalOrDegree());

        expect(Field.prototype.updateText).toHaveBeenCalledWith(50);
    });
});