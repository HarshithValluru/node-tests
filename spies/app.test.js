const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe("App",() => {
    var db = {
        saveUser : expect.createSpy()
    };
    app.__set__('db',db);
    it("should call the spy correctly", () => {
        var spy = expect.createSpy();
        spy("Harshith",23);
        expect(spy).toHaveBeenCalledWith("Harshith",23);
    });
    it("should call saveUser with user Object", () => {
        var email = "harshith@valluru.com";
        var password = "ram123"
        app.handleSignUp(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});