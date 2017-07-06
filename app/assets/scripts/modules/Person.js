class Person{
		constructor(fullName, Age) {
			this.name = fullName;
 			this.age = Age;
		}
		sayHello(){
 		console.log("WAZZUP!! !!! " + this.name + " " + this.age);
 		}
 	
 }


 //module.exports = Person;
 export default Person;