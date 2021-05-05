/* ===============================================Testing The index.js routes module========================== */
//importing assertion library from chia
let expect = require("chai").expect;
let request = require("request");

describe("Testing Response, Error and Body", () => {
  describe("Get request page", () => {
    it("Asserts that a response gives a status code", (done) => {
      const music = "music";
      const term = "hello";
      request(`http://localhost:8080/api/content/${music},${term}`, (error, response, body) => {
        //code of 200 indicating successful HTTP requests
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("Doesn't return an error and returns an object", (done) => {
      //mock variables for our request
      const music = "music";
      const term = "hello";
      request(`http://localhost:8080/api/content/${music},${term}`, (error, response, body) => {
        //test that error is not returned
        const json = JSON.parse(body) 
        expect(json).to.be.an("object")
        expect(error).to.be.null;
        //signal callback end
        done();
      });
    });
  });
});
