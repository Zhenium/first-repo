function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayMeow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let string of input) {
        let [catName, catAge] = string.split(' ');
        let cat = new Cat(catName, catAge);
        cat.sayMeow();
    }
}

solve(['Mellow 2', 'Tom 5']);