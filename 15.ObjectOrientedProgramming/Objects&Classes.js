class User  {
    constructor(name, age){
        this.name:name;
        this.age:age;
    }

    greet() {
        console.log(`Hi ${this.name}`)
    }
}

const user1 = new User('Shoaib', 26);
console.log(user1);
user1.greet()