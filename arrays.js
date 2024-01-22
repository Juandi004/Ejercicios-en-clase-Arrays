'use strict'

//Iterables

let word="Hoy es Lunes";

for (let char of word){
    alert(char);
}

/*este método permite iterar un string o Array, de forma que salga un alert
hasta que se termine la palbra (en el caso de string), y en Arrays, hasta que
salga un alert para cada elemento*/


//map/set

let map=new Map();
map.set(1, "Fútbol");

alert(map.get(1));

/*el método map es igual a un objeto, pero, Map permite claves de cualquier tipo.
En el ejemplo mostrado, usamos una clave tipo string, a la cual asignamos el valor "Fútbol"
Un Set es una colección de tipo especial: “conjunto de valores” (sin claves), 
donde cada valor puede aparecer solo una vez.*/


//Object.keys, values, entries

let person={
    name: "Juan",
    age: 19
};

for (let value of Object.values(person)){
    alert(value);
}

/*el método Object.values se utiliza para extraer los valores de las propiedades de un objeto
 y devolverlos como un array.*/
 

 //Desestructuración

let colores = [`rojo`, `verde`, `azul`];
let [color1, color2, color3] = colores;

alert(color1);
alert(color2);
alert(color3)

/*la desestructuración de datos sirven para crear variables independientes, en este caso, de un Array.
Se crearán 3 variables independientes, color1, color2 y color3.*/


//Fecha y hora
let now = new Date();
alert(now);

/*el objeto Date ya viene incorporado en JS, y brinda varios métodos para administrarla;*/


//JSON

let person2={
    name: "Josue",
    age: 22
};

let person2JSON=JSON.stringify(person2);
alert(person2JSON);

/*JSON es un formato de datos que tiene su propio estándar independiente y librerías para la mayoría 
de los lenguajes de programación.
Con el método JSON.stringify, convertimos un objeto a un formato JSON*/