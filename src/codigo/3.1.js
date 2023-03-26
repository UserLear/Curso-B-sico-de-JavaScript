//primitivos son tipos inmutables
//.......modificar primitivo utilizando metodos
var bar = "baz";
console.log(bar); //baz
bar.toUpperCase(); //metodo para convertir en mayuscula
console.log(bar); //baz

//.......modificacion de primitivos por medio de asignacion
bar = bar.toUpperCase(); //BAZ

//.......modificar primitivo utilizando funcion
let foo1 = 5; //2. al encontrarla la evalua y el identificador se reemplaza por el valor "5"
function addTwo(num) {
    num += 2; //3. antes de ejecutar la declaracion js toma una copia del argumento pasado (que es un primitivo) y crea una copia local
}
function addTwo2(foo1) {
    foo1 += 2; //4. la copia se guarda en los identificadores num y foo1
}
addTwo(foo); // 5 // 1. con cada llamada js busca el identificador (variable instanciada con la primera declaracion) del argumento
console.log(foo1);
addTwo2(foo); // 5 //5. se devuelve 5 porque lo que se modifica el la copia no la variable original de afuera
console.log(foo1)

//tipos objetos sin son mutables
var foo = [];
console.log(foo); //[]
foo.push("plugh"); //metodo para anadir un elemento
console.log(foo); //[plugh]




