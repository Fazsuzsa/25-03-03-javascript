// Kommentar
console.log("Hello World")

// Variablen:
let my_name = "Zsuzsa";
let alter = 32;

console.log(`Ich bin ${my_name}.`); // formattierter Strings
console.log(alter);
console.log(my_name + " " + alter);

let b;
console.log(b);

// primitive Datentypen:
a = 5           // number
a = true        // boolean
a = "Text"      // string
a = undefined   // undefined ("Noch kein Wert")
a = null        // null ("Absichtlich kein Wert")

// primitive Rechenoperationen:
let x = 2;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * (y + y));
console.log(y + y * x);
console.log(x * y);
console.log(x / y);
console.log(x / 0);
console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));
console.log(x ** y); // Hochzahl (schneller)
console.log(x % y); //Modulo (=Rest der Division)

let hochzahl = Math.pow(x, y);
console.log(hochzahl);

let quadratwurzel = Math.sqrt(y);
console.log(quadratwurzel);

// Boolische Operationen:
console.log(true && 2 > 3); // && und
console.log(3 >= 2);
console.log(false || 1 == 2); // || oder
console.log(1 == "1");
console.log(1 === "1");
console.log(!false); // ! nicht