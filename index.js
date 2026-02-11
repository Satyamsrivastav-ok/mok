class Student {
    constructor(name, age, city, state, pin, lang1, lang2) {
        this.name = name;
        this.age = age;

        this.address = {
            city: city,
            state: state,
            pin: pin
        };

        this.skills = {
            programming: {
                language1: lang1,
                language2: lang2
            }
        };
    }
}

let student = new Student(
    "Satyam",
    21,
    "Ghaziabad",
    "UP",
    201001,
    "JavaScript",
    "C++"
);

console.log(student.name);
console.log(student.address.city);
console.log(student.skills.programming.language1);
console.log(student);
