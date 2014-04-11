var jQuery = require('jquery');

var degree = 0;
function getDegree() {
    switch(degree) {
         case 0:
           return 'Nord';
         case 90:
           return 'East';
    }
}

describe("Compass", function() {
    it("compass should show Nord", function() {
        expect(getDegree()).toEqual("Nord");
    });

    it("compass should show East", function() {
        degree += 90;
        expect(getDegree()).toEqual("East");
    });
});