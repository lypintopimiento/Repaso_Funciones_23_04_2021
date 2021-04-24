

// declaración
// function saludar(p1){
//     return `Hola ${p1} como estas`;
// }

// expresión.
// const saludar = function (p1){
//     return `Hola ${p1} como estas`;
// }

//Funciones anonimas array
// let saludar  = [
//     function (p1){
//         return `Hola ${p1} como estas`;
//     }
// ];
// console.log(saludar[0]("Miguel"));


// Callbacks 
// function saludar(Callbacks){
//     return `Hola ${Callbacks("Miguel")}`;
// }
// function tuNombre(p1){
//     return `soy ${p1}`;
// }
// console.log(saludar(tuNombre));


// Funciones autoejecutables 
// (function (p1){ 
//     console.log(`Hola ${p1} como estas`);
// })("Miguel");


// clausuras
const incr = (function (){
    let num = -1;
    return function (p1=""){
        if (p1==null){
            num = -1;
        }
        num++;
        return num;
    }
})();
console.log(incr());
console.log(incr());
console.log(incr());
console.log(incr(null));
console.log(incr());


// Funciones Flecha
let flecha = () => {
    return "Hola";
}
let flecha2 = (p1) => {
    return `${p1}`;
}
let flecha3 = (p1) => `${p1}`;
let flecha4 = p1 => {
    return `${p1}`;
}
let flecha5 = p1 => `${p1}`;
let flecha6 = (p1,p2) => `${p1} ${p2}`;
let flecha7 = (p1,p2) => {
    return `${p1} ${p2}`
};






