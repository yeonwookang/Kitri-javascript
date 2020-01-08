class MyClass {
    constructor(name='', age=0) {
        this._name = name;
        this._age = age;
    }

    sayHello() {
        return 'Hello Im ' + this._name + ', and Im ' + this._age + 'years old.';
    }

    get name() {
        console.log('name getter...')
        if(this._name) return this._id;
    }

    set age (age) {if(age) this._age = age; 
        console.log('age setter...');
    }

}

const person = new MyClass('yeonwookang', 20);
var name = person.name;
person.age = 27;

console.log(person.sayHello());