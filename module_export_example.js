const person = {
    name:"Jaydeep",
    age:33,
    city:"Gandhinagar",
    intro:()=>{
        return `My name is ${person.name} & my age is:${person.age}` // here {this.name} or {this.age} will not work because of arrow function
    }
    
}

module.exports =  person;