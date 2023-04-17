function Fibonacci(x, y) {

    return x + y

}

var hoeveelheid = 20

var x = 1
var y = 1

console.log(x)
console.log(y)

for (var i = 3; i <= hoeveelheid; i++) {
    var nummer = Fibonacci(x, y);
    console.log(nummer)
    var y = x
    var x = nummer
}