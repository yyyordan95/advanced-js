let expect = require("chai").expect;
let leapYear = require("./index").leapYear;

describe("leapYear calculates specific year", function () {

    it("should return Yes for 2020", function () {
        expect(leapYear(2020)).to.be.equal('Yes');
    });

});