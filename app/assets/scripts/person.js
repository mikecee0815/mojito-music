 var $ = require('jquery');
 require('lazysizes');
 require('jquery-scrollToTop');
 require('bootstrap-sass');
 var Person = require('./modules/Person.js');
 var Greeter = require('./modules/Greeter.js');


 var me =  new Person("michael Corporan" , "47");
 var user =  new Greeter("Mr. Michael Corporan" );
 me.sayHello();
 user.greetMe();
 jQuery(document).ready(function($) {
 	
 });