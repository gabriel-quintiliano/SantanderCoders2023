class Person {
    name: string;
    age: number;
    weight?: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static withWeight(name: string, age: number, weight: number): Person {
        const person = new Person("Com peso", 18);
        person.weight = weight;

        return person;
    }
}

