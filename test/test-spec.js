var jQuery = require('jquery');

function getDegree() {
    return "Nord"
}

describe("Compass", function() {
    it("compass should show nord", function() {
        expect(getDegree()).toEqual("Nord");
    });
});