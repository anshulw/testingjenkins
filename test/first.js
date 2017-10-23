var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var util = require("util");
var config = require("../config.json");

describe('returns luke', function(){
  it('returns luke', function(done){
    request.get({url:config.baseUrl+'/people/1/'}, function(error, response, body){
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});
