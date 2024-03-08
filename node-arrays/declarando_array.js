// declaração de array
                //   0         1          2
const meuArray = ['Cirilo', 'Rafael', 'Geovanna'];

const meuArrayVariado = [1,'Jhonatan',1.2, ['jhonatan','padua'], {nome:'jhonatan'}];

            //template string
console.log(`Meu array varido  ${meuArrayVariado}`);

            //conctenação simples
console.log('Meu array simples ' + meuArray);

// console.log(meuArray[0]);
// console.log(meuArray[1]);
// console.log(meuArray[2]);


for(let i = 0; i < meuArray.length; i++){
    console.log(meuArray[i]);
}