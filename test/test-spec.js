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

function Compass() {
    this.degree = 0;
}
Compass.prototype = {
    setDegree: function(newDegree) {
        this.degree = newDegree;
    },

    increaseDegree: function(incDegree) {
        this.degree += incDegree;
    },

    getDegree: function() {
        if(this.degree >= 360 || this.degree < 0){
            this.degree = 0;
        }
        return this.degree;
    },

    getCardinalDegree: function() {
        switch(this.degree) {
            case 0:
                return 'North';
            case 45:
                return 'North-East';
            case 90:
                return 'East';
            case 135:
                return 'South-East';
            case 180:
                return 'South';
            case 225:
                return 'South-West';
            case 270:
                return 'West';
            case 315:
                return 'North-West';
        }
        if(this.degree >= 360 || this.degree < 0){
            this.degree = 0;
            return 'North';
        }else{
            return this.degree;
        }
    }
};

function showAndRotateImage(imageId, angle) {
    var image = new Image(imageId);
    image.show();
    image.rotate(angle);
}

/*
cardinalPoints = {
    0:'North',
    45:'North-East',
    90:'East',
    135:'South-East',
    180:'South',
    225:'South-West',
    270:'West',
    315:'North-West'
}
*/


describe("Compass", function() {

    var myImage;
    var myCompass;

    beforeEach(function(){
       myImage = new Image('imageId');
       myCompass = new Compass();
    });

    it("compass should show cardinal points", function() {
        expect(myCompass.getCardinalDegree()).toEqual("North");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("North-East");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("East");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("South-East");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("South");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("South-West");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("West");
        myCompass.increaseDegree(45);
        expect(myCompass.getCardinalDegree()).toEqual("North-West");
        myCompass.increaseDegree(45);
    });
    it("compass should check if out of range", function() {
        for (var i=360;i<=370;i++){
           expect(myCompass.getCardinalDegree(i)).toEqual('North');
        }
        for (var i=0;i>=-10;i--){
           expect(myCompass.getCardinalDegree(i)).toEqual('North');
        }
    });
    it("angle 90 should rotate with angle 90", function() {
        spyOn(Image.prototype, 'rotate');
        myCompass.setDegree(90);
        showAndRotateImage('imageId', myCompass.getDegree());

        expect(Image.prototype.rotate).toHaveBeenCalledWith(90);
    });
});