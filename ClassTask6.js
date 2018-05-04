function func() {
    var count = 1;
    return function () {
        return count++;
    };
}
var counter = new func();
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );

