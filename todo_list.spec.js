/**
 * API testing for todo_list
 * API used
 * @see local:8080
 *
 *
 * @author Ryno Hoorn
 *
 */

/**
 * Load the needed libraries
 * Mocha is not here, since it is the test runner 
 */
var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:8080";
var jsonDataObj_add = { "id": 3, "todo": "add redit", "status": "inprogress"};
var jsonDataObj_edit = { "id": 3, "todo": "add redit", "status": "inprogress"};
var jsonDataObj_delete = { "id": 3,}

// Create our test case, we need to inform the description
describe("Test TODOs API",function(){

  it("GET TODO's: verify items in the todo_list, Produces: JSON Array of Todos",function(done){
    request.get(
      {
        url : urlBase + "/todos"
      },
      function(error, response, body){

        // convert the response to json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        // using chai expect function, lets check the result: no status code is returned
		expect(_body[0].todo).to.equal('Write app for QA assessment');
	    expect(_body[0].status).to.equal('inprogress');
		expect(_body[0].id).to.equal(1);
		expect(_body[1].todo).to.equal('Write up for QA assessment');
		expect(_body[1].status).to.equal('done');
		expect(_body[1].id).to.equal(2);

        done(); // callback the test runner to indicate the end...
      }
    );
  });
  
 it("ADD TODO's: Consumes: JSON Object of Todo to add,  Produces: JSON Array of Todos",function(done){
    request.post(
      {
        url : urlBase + "/todos",
		body: jsonDataObj_add,
		json: true
      },
      function(error, response, body){

        // convert the response to json
		//console.log(body);
        //var _body = {};
        //try{
        //  _body = JSON.parse(body);
        //}
        //catch(e){
        //  _body = {};
        //}
		console.log(body);
        // using chai expect function, lets check the result: no status code is returned
	    expect(body[2].id).to.equal(3);
		expect(body[2].todo).to.equal('add redit');
		expect(body[2].status).to.equal('inprogress');

        done(); // callback the test runner to indicate the end...
      }
    );
  });
  
  
 it("EDIT TODO's: Consumes: JSON Object of Todo to edit,  Produces: JSON Array of Todos",function(done){
    request.post(
      {
        url : urlBase + "/edit-todos",
		body: jsonDataObj_edit,
		json: true
      },
      function(error, response, body){

        // convert the response to json
		//console.log(body);
        //var _body = {};
        //try{
        //  _body = JSON.parse(body);
        //}
        //catch(e){
        //  _body = {};
        //}
		console.log(body);
        // using chai expect function, lets check the result: no status code is returned
	    expect(body[3].id).to.equal(3);
		expect(body[3].todo).to.equal('add redit');
		expect(body[3].status).to.equal('inprogress');

        done(); // callback the test runner to indicate the end...
      }
    );
  });
  
   it("DELETE TODO's: Consumes: JSON Object of containing id of todo to delete,  Produces: JSON Array of Todos",function(done){
    request.post(
      {
        url : urlBase + "/del-todos",
		body: jsonDataObj_delete,
		json: true
      },
      function(error, response, body){
		console.log(body);
		expect(body).to.have.lengthOf.at.most(12);
 
        done(); // callback the test runner to indicate the end...
      }
    );
  });
});