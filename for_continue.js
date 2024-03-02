
// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         continue;
//     }
//     console.log(i);
// }

const listaNomes = ['mario', 'luigi', 'piach', 'gumna'];

for(let i = 0; i < listaNomes.length; i++ ){
    if(listaNomes[i] === listaNomes[2]){
        continue;
    }
    console.log(listaNomes[i]);
}

