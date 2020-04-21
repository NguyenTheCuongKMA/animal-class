 var chalk = require ('chalk'); 
function Dog(name){
    this.stomach = [] ;
    this.name = name ; 
}
Dog.prototype.eat = function (Cat){
    this.stomach.push(Cat) ; 
}

Dog.prototype.sayHi = function () { 
    console.log('Hi, i"m '+ chalk.blue(this.name));
}

module.exports = Dog ;