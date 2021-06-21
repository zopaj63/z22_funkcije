function findFizzBuzz(min, max, word1, word2) {
    var fizzBuzz = [];
    for (var i = min; i <= max; i++) {
        if (i === 0) continue;
        var message = "";
        if (i % 3 === 0) message += word1;
        if (i % 5 === 0) message += word2;
        if (message !== "") fizzBuzz.push(message);
    }
    return fizzBuzz;
}

var fizzBuzz1 = findFizzBuzz(10, 200, "fizz", "buzz");
console.log(fizzBuzz1);

var fizzBuzz2 = findFizzBuzz(5, 40, "Hello", "World");
console.log(fizzBuzz2);


/*
VJEŽBA: Funkcije, petlje i nizovi
Trajanje: 30min (cca 20:55)

1. Napravite novu .js datoteku
2. Napišite JS program koji će definirati funkciju "findFizzBuzz"
3. Funkcija "findFizzBuzz" će vratiti niz fizzbuzz poruka prema pravilima:
3a. u niz "fizzBuzz" spremiti samo one vrijednosti u rasponu od 0 do parametra "max" (uključivo) koje su djeljive sa 3 i sa 5.
3b. Ako je broj djeljiv sa 3 u "fizzBuzz" zapisati "fizz".
3c. Ako je broj djeljiv sa 5 u "fizzBuzz" zapisati "buzz".
3d. Ako je broj djeljiv sa 15 u "fizzBuzz" zapisati "fizzbuzz".
3e. Sve ostale brojeve ne zapisujete u niz.
4. Ispisati rezultat pozivanja "findFizzBuzz" sa argumentom "20" i "40".

BONUS:
1. Definirajte i "min" parametar uz "max" tako da možete definirati od kojeg i do kojeg broja se petlja kreće
2. Definirajte parametre za "fizz" i "buzz" tekstove da možete sami definirati tekst koji će se ispisati kod djeljivosti
*/