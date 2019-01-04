// function add(x, y, printFun){
//     var result = x + y;
//     printFun(result);
// }

// function print(result) {
//     console.log(result)
// }
// add(3, 56, print);


// var friends = ["Hiroko", "Sam", "Jean", "Rigo"];
// // ES5
// friends.forEach(function(eachName, index){
//     console.log(index + 1 + "." + eachName);
// })

// // ES6
// friends.forEach((eachName, index) =>{
//     console.log(`${index + 1}. ${eachName}`);
// })

class Person {
    constructor(name){
        this.name = name;
    }
    Greeting(){
        console.log(`hello ${this.name}`)
    }
}

module.exports = Person;