exports.person = {
    name:"Jaydeep",
    age:33,
    city:"Gandhinagar",
    intro:function(){  
        return `My name is ${this.name} & my age is:${this.age}` // here {this.name} or {this.age} will not work if you use an  arrow function
    }
}

exports.func = ()=>{
    return "I am a function";
}

exports.country = "India";