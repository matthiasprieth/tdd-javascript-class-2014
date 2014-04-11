var jQuery = require('jquery');

cardinalPoints ={
    0:'North',
    45:'North-East',
    90:'East',
    135:'South-East',
    180:'South',
    225:'South-West',
    270:'West',
    315:'North-West'
}
function getDegree(degree) {
    return cardinalPoints[degree];
}

describe("Compass", function() {
    it("compass should show cardinal points", function() {
        expect(getDegree(0)).toEqual("North");
        expect(getDegree(45)).toEqual("North-East");
        expect(getDegree(90)).toEqual("East");
        expect(getDegree(135)).toEqual("South-East");
        expect(getDegree(180)).toEqual("South");
        expect(getDegree(225)).toEqual("South-West");
        expect(getDegree(270)).toEqual("West");
        expect(getDegree(315)).toEqual("North-West");
    });
});