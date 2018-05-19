//**************************CONSTRUCTORS***********************
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// var myFather = new Person("John", "Doe", 50, "blue");
// var myMother = new Person("Sally", "Rally", 48, "green");

// console.log(myFather);
// console.log(myMother);


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
class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    } //in classes we don't need a coma here
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, ' score is now: ', this.score);
        return this; // by returning this we can do new methods on user and chaining method works
    }
}

var userI = new User('abc@gmail.com','alex');
var userII = new User("def@gmail.com","addy");

userI.updateScore();
userI.updateScore();
userII.updateScore();

userI.login().updateScore().updateScore().logout();