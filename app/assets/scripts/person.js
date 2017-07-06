 var $ = require('jquery');
 require('lazysizes');
 require('jquery-scrollToTop');
 require('bootstrap-sass');
 require('scrollreveal');
 

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

// window.sr = new ScrollReveal();
//     sr.reveal('.col__left');
//     sr.reveal('.col__right');
 