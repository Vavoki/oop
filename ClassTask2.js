
function  Works (name, surname, rate, days) {

    this.getName = function () {

        return name;

    }
    this.getSurname = function () {

        return surname;

    }
    this.getRate = function () {

        return rate;

    }
    this.getDays = function () {

        return days;

    }
    this.getSalery = function () {

        return rate * days;

    }


}

const worker = new Works('Иван', 'Иванов', 10, 31);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalery()); //выведет 310 - то есть 10*31


