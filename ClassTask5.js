class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + this.surname;
    }
}
class  Student  extends User{
    constructor(name, surname,year ) {
        super(name, surname);
        this.year = year;
    }
    getCourse () {
        let mdate = new Date();
        return mdate.getFullYear() - this.year;
    }
}

var student = new Student('Иван', 'Иванов', 2015);

    console.log(student.name); //выведет 'Иван'
    console.log(student.surname); //выведет 'Иванов'
    console.log(student.getFullName()); //выведет 'Иван Иванов'
    console.log(student.year); //выведет 2015
    console.log(student.getCourse()); //3

