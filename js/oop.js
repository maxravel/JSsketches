//**************************CONSTRUCTORS***********************
// function Person(first, last, age, eye, dob) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.dob = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.dob.getTime();
//         const ageDate = new Date(diff);
//         return ageDate.getUTCFullYear() -1970;
//     }
// }

// var myFather = new Person("John", "Doe", 50, "blue", "3/25/1993");
// var myMother = new Person("Sally", "Rally", 48, "green", "10/10/1963");

// console.log(myFather.calculateAge());
// console.log(myMother);



//*****************************PROTOTYPES *************************
//Object.prototype
// function Person(first, last, dob) {
//     this.firstName = first;
//     this.lastName = last;
//     this.dob = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.dob.getTime();
//     //     const ageDate = new Date(diff);
//     //     return ageDate.getUTCFullYear() -1970;
//     // }
// }

// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.dob.getTime();
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() -1970;
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getsMarried = function(newLast){
//     this.lastName = newLast;
// }

// const one = new Person("John", "Doe", "3/25/1993");
// const two = new Person("Sally", "Rally", "10/10/1963");

// console.log(one);
// console.log(one.calculateAge());
// console.log(two.getFullName());

// two.getsMarried("Sachs");
// console.log(two.getFullName());


//*******************************PROTOTYPE INHERITANCE ******************** */

function Person(firstName, lastName){
    this.firstName = firstName; 
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `hello ${this.firstName} ${this.lastName}`;
}

const personOne = new Person("John","Doe");

console.log(personOne.greeting());

//customer constructor
function Customer(firstName, lastName, phone, membership){
    //we can call other constructor
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherit the person method
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer
Customer.prototype.constructor = Customer;

const customer1 = new Customer('tom','peres','555444333','yes');
console.log(customer1);
//this don't work without inherit
console.log(customer1.greeting());

Customer.prototype.greeting = function(){
    return `hello ${this.firstName} ${this.lastName} welcome here`;
};
console.log(customer1.greeting());



// OBJECT.CREATE

//**************************CLASSESS***********************

// var userOne = {
//     email: "abc@gmail.com",
//     name: "andy",
//     logIn(){
//         console.log(this.email, "has logged in");
//     },
//     logOut(){
//         console.log(this.email, "has logged out");
//     }
// };

// var userTwo = {
//     email: "def@gmail.com",
//     name: "pati",
//     logIn(){
//         console.log(this.email, "has logged in");
//     },
//     logOut(){
//         console.log(this.email, "has logged out");
//     }
// };

// var userThree = {
//     email: "ghi@gmail.com",
//     name: "eddy",
//     logIn(){
//         console.log(this.email, "has logged in");
//     },
//     logOut(){
//         console.log(this.email, "has logged out");
//     }
// };

// class User{
//     constructor(email,name){
//         this.email = email;
//         this.name = name;
//     } //in classes we don't need a coma here
//     login(){
//         console.log(this.email, 'just logged in');
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//     }
// }

// var userI = new User('abc@gmail.com','alex');
// var userII = new User("def@gmail.com","addy");

// //the new keyword: 
// // 1) creates new empty object {}
// // 2) sets value of this to be the new empty object
// // 3) calls the constructor method

// console.log(userI);
// console.log(userII);
// userI.login();
// userII.logout();


//************************METHOD CHAINING***********************
// userI.login().logout(); <-- this don't work
// class User{
//     constructor(email,name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     } //in classes we don't need a coma here
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, ' score is now: ', this.score);
//         return this; // by returning this we can do new methods on user and chaining method works
//     }
// }

// var userI = new User('abc@gmail.com','alex');
// var userII = new User("def@gmail.com","addy");

// userI.updateScore();
// userI.updateScore();
// userII.updateScore();

// userI.login().updateScore().updateScore().logout();