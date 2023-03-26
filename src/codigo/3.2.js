//strings
const string1 = "una cadena primitiva";
const string2 = 'una cadena primitivas';
const string3 = `una cadena primitiva`;

//.......con el contenedor de objeto String
const string4 = new String("un objeto");

//.......metodos
console.log("cat".charAt(1)); 
const string5 = string1.charAt(8); //charAt() accede a un caracter individual
console.log(string5);
console.log(string1[8]); //tratar la cadena como un arreglo 

if (string1 < string2) { //operador < y > para comparar cadenas
    console.log("string1 es menor a string2")
} else {
    console.log("string2 es menor a string1")
}

const a = "reserve";
const b = "RESERVE";
console.log(a.localeCompare(b));
console.log(a.localeCompare(b, "en", {sensitivity: "base"}));


