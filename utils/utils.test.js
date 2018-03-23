const expect = require('expect');

const utils = require('./utils');

describe("Utils",() => {

    describe("#add",()=>{
        it('should add two numbers', () => {
            var result = utils.add(11,22);
            expect(result).toBe(33).toBeA('number');
            // if(result !== 33)
            //     throw new Error(`Expected 33 but got ${result}`);
        })

        //still returns no error as mocha doesn't know that it is an asnyc function(since timeout is used)
        //to make it understand..we pass an argument. Here it is 'done'
        it("should add async two numbers",(done)=>{
            var result = utils.addAsync(4,3,(sum)=>{
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        })
    });
    
    it('should async square a number', (done) => {
        var result = utils.square(11,(square)=>{
            expect(square).toBe(121).toBeA('number')
            done();
        });
    })
});


it("should verify first and last names", () => {
    var user = {age : 23 , loc : "hyderabad"};
    var result = utils.setName(user,"Harshith Valluru");
    //expect(user).toBe(result).toBeA('object');
    expect(user).toInclude({
        firstName : "Harshith",
        lastName : "Valluru"
    });
});

// it("should expect some values",()=>{
//     //expect(12).toBe(12);
//     //expect({name : "ram"}).toNotEqual({name : "Ram"});    //Works on objects
//     //expect([2,3,4]).toExclude(5);               //Works on objects
//     expect({
//         name : "ram",
//         age : 23,
//         loc : "hyd"
//     }).toInclude({
//         age : 23
//     });
// });