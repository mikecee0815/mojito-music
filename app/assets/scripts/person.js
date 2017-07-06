 var $ = require('jquery');
 require('lazysizes');
 require('jquery-scrollToTop');
 require('bootstrap-sass');
 

 //var Person = require('./modules/Person.js');
 import Person from './modules/Person';
 
 class senior extends Person{
 	foo(){
 		console.log('Senior FOO!!!');
 	}
 }

 var Greeter = require('./modules/Greeter.js');


 var me =  new Person("michael f. Corporan" , "47");
 var user =  new Greeter("Mr. Michael Corporan" );
 var oldman =  new senior("Mr. Michael Corporan sr","65" );
oldman.foo();

 me.sayHello();
 user.greetMe();
 