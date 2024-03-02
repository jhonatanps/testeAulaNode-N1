// i mesa coisa que contador
//break
// quando a condição for atigida ele mata o sistema
for(let i = 0; i < 5; i++){
    if(i === 4){
        break;
    }
    console.log(i);
}

//continue
// pula o dado
for(let i = 0; i < 10; i++){
    if(i % 2 == 0 ){
        continue;
    }
    console.log(i);
}