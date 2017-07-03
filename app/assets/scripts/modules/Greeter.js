function Greeter(fullName){
 	this.fname = fullName;
 	this.greetMe = function(){
 		console.log("Hello again!  " + this.fname + "  from the Greeter class " );
 	}
 }


 module.exports = Greeter;