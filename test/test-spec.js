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

function Field(fieldId) {
    this._fieldId = fieldId;
    this._fieldText = "";
}
Field.prototype = {

    updateText: function(text) {
        this._fieldText = text;
    },

    getText: function() {
        return this._fieldText;
    }
};

function showAndRotateImage(imageId, angle) {
    var image = new Image(imageId);
    image.show();
    image.rotate(angle);
}

function showAndUpdateText(fieldId, text) {
    var field = new Field(fieldId);
    field.updateText(text);
}

describe("Compass tests", function() {

    var myImage;
    var myField;
    var myCompass;

    beforeEach(function(){
       myImage = new Image('imageId');
       myField = new Field('fieldId');
       myCompass = new Compass();
    });

    it("compass should get cardinal point every 45 degree", function() {
        for (var i=0;i<8;i++){
            expect(myCompass.getCardinalOrDegree()).toEqual(myCompass.getCardinalPoint(i));
            myCompass.increaseDegree(45);
        }
    });
    it("compass should get degree if not is multiple of 45 degree", function() {
        for (var i=1;i<360;i++){
            myCompass.increaseDegree(1);
            if(i%45 != 0){
                expect(myCompass.getCardinalOrDegree()).toEqual(i);
            }
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
    it("angle 50 should show Text 50 degree", function() {
        spyOn(Field.prototype, 'updateText');
        myCompass.updateDegree(50);
        showAndUpdateText('fieldId', myCompass.getCardinalOrDegree());

        expect(Field.prototype.updateText).toHaveBeenCalledWith(50);
    });
    it("angle 90 should show Text East", function() {
        spyOn(Field.prototype, 'updateText');
        myCompass.updateDegree(90);
        showAndUpdateText('fieldId', myCompass.getCardinalOrDegree());

        expect(Field.prototype.updateText).toHaveBeenCalledWith("East");
    });
    it("angle 360 should show Text North", function() {
        spyOn(Field.prototype, 'updateText');
        myCompass.updateDegree(360);
        showAndUpdateText('fieldId', myCompass.getCardinalOrDegree());

        expect(Field.prototype.updateText).toHaveBeenCalledWith("North");
    });
    it("angle 0 should show Text North", function() {
        spyOn(Field.prototype, 'updateText');
        myCompass.updateDegree(0);
        showAndUpdateText('fieldId', myCompass.getCardinalOrDegree());

        expect(Field.prototype.updateText).toHaveBeenCalledWith("North");
    });
    it("angle 90 should rotate with angle 90", function() {
        spyOn(Image.prototype, 'rotate');
        myCompass.updateDegree(90);
        showAndRotateImage('imageId', myCompass.getDegree());

        expect(Image.prototype.rotate).toHaveBeenCalledWith(90);
    });
    it("angle 360 should rotate with angle 0", function() {
        spyOn(Image.prototype, 'rotate');
        myCompass.updateDegree(360);
        showAndRotateImage('imageId', myCompass.getDegree());

        expect(Image.prototype.rotate).toHaveBeenCalledWith(0);
    });
});