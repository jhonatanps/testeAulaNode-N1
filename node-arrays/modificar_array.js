// declarei o array
let frutas = ['uva','morango','tomate'];

// modifiquei o elemento 0
frutas[0] = 'melao';

console.log('Antes de inserir um dado ' + frutas.length);

// adicionei um elemento ao array
frutas.push('uva');

console.log('Depois de inserir um dado ' + frutas.length);

// produto final
console.log(frutas);


frutas.pop();

console.log(frutas);

console.log('Depois do pop ' + frutas.length);

frutas.unshift('uva');

console.log(frutas);

console.log(frutas.indexOf('morango'));

//['uva','morango','tomate']

frutas.splice(0,1);

console.log(frutas);


// // com constante
// const nome = ['jhonatan','padua'];

// nome.pop();

// nome.push('soare');

// nome[0] = 'Priscilla';

// console.log(nome);

// nome.shift();

// console.log(nome);







