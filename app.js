function findFizzBuzz(min, max, word1, word2) {
    var fizzBuzz = [];
    for (var i = min; i < max; i++) {
        if (i === 0) continue;
        var message = "";
        if (i % 3 === 0) message += word1;
        if (i % 5 === 0) message += word2;
        if (message !== "") fizzBuzz.push(message);
    }
    return fizzBuzz;
}

var fizzBuzz1 = findFizzBuzz(10, 20, "fizz", "buzz");
console.log(fizzBuzz1);

var fizzBuzz2 = findFizzBuzz(5, 40, "zzif", "zzub");
console.log(fizzBuzz2);
