function Person(fullName, Age){
 	this.name = fullName;
 	this.age = Age;
 	this.sayHello = function(){
 		console.log("Hellooo !!! " + this.name + " " + this.age);
 	}
 }


 module.exports = Person;