const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe("Server",() => {
    describe("GET /", () => {
        it("should return Hello World response",(done)=>{
            request(app)
                .get("/")
                //.expect(200).expect("Hello World !!")
                //.expect(404).expect({error : "Page Not Found."})
                .expect(404)
                .expect( (res) => {
                    expect(res.body).toInclude({
                        error : "Page Not Found."
                    })
                })
                .end(done);
        });
    });
    describe("GET /Users", () => {
        it("should return users array",(done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect( (res) => {
                    expect(res.body).toInclude(
                        {name: "Harshith", age: 23}
                    );
                })
                .end(done)
        });
    });
});