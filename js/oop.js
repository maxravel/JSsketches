//**************************Constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);


//**************************Classes

var userOne = {
    email: "abc@gmail.com",
    name: "andy",
    logIn(){
        console.log(this.email, "has logged in");
    },
    logOut(){
        console.log(this.email, "has logged out");
    }
};

var userTwo = {
    email: "def@gmail.com",
    name: "pati",
    logIn(){
        console.log(this.email, "has logged in");
    },
    logOut(){
        console.log(this.email, "has logged out");
    }
};

var userThree = {
    email: "ghi@gmail.com",
    name: "eddy",
    logIn(){
        console.log(this.email, "has logged in");
    },
    logOut(){
        console.log(this.email, "has logged out");
    }
};

class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
}

var userI = new User('abc@gmail.com','alex');
var userII = new User("def@gmail.com","addy");

console.log(userI);
console.log(userII);

//the new keyword: 
// 1) creates new empty object {}
// 2) sets value of this to be the new empty object
// 3) calls the constructor method