
class MyString {

    reverse (string) {
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        return string[0].toUpperCase()+string.slice(1);

    }
    ucWords (string) {
        return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }

}



const str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


class Validator {

    isDate(date) {
        var regex =/^[\d]{2}[\.|\-|\/][\d]{2}[\.|\-|\/][\d]{4}$/;
        return regex.test(date);
    }
    isPhone(phone) {
        var regex =/^[\+](380)[\d]{9}$/;
        return regex.test(phone);
    }
    isUrl(url) {
        var regex = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return regex.test(url);
    }
    isEmail(email) {
        var regex = /^[\w\s]{3,}@[\w\s]{3,}\.[\w\s]{2,}/;
        return regex.test(email.toLowerCase());
    }
}
const validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isUrl('phphtml.net'));
console.log(validator.isDate('12.05.2020')); //// Дату пока не фиксил, знаю что не всегда коренктно работает
console.log(validator.isPhone('+380989817689'));


