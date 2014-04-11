var jQuery = require('jquery');

var degree = 0;
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
function getDegree() {
    switch(degree) {
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
    if(degree >= 360 || degree > 0){
        degree = 0;
        return 'North';
    }else{
        return degree;
    }
}

describe("Compass", function() {
    it("compass should show cardinal points", function() {
        expect(getDegree()).toEqual("North");
        degree += 45;
        expect(getDegree()).toEqual("North-East");
        degree += 45;
        expect(getDegree()).toEqual("East");
        degree += 45;
        expect(getDegree()).toEqual("South-East");
        degree += 45;
        expect(getDegree()).toEqual("South");
        degree += 45;
        expect(getDegree()).toEqual("South-West");
        degree += 45;
        expect(getDegree()).toEqual("West");
        degree += 45;
        expect(getDegree()).toEqual("North-West");
        degree += 45;
    });
    it("compass should check if out of range", function() {
        for (var i=360;i<=370;i++){
            expect(getDegree(i)).toEqual('North');
        }
        for (var i=0;i>=-10;i--){
            expect(getDegree(i)).toEqual('North');
        }
    });

});