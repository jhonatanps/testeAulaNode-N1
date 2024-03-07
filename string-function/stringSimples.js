const minhaString = "jhonatan padua";

//console.log(minhaString);

//contador de string
//console.log(minhaString.length);

const nome = "jhonatan";
const sobreNome = "padua";

const nomerCompleto = nome + sobreNome;

//nome mais sobre nome
//sem espaço
//console.log(nomerCompleto);
//com espaço
//console.log(`${nome} ${sobreNome}`);

//acessar uma posição
//console.log(nome[0]);

function leNomeNaVertical(nome){
    console.log("Tamanho da string " + nome.length);
    for(let i = 0; i < nome.length; i++ ){
        console.log(nome[i]);
    }
}

//leNomeNaVertical(nome);


const nomeEmMaiusculas = nome.toUpperCase();
const nomeEmMinusculo = nomeEmMaiusculas.toLowerCase();

// console.log(nomeEmMaiusculas);
// console.log(nomeEmMinusculo);
                              //inicio - fim  
// let metadeIntNome = nome.slice(0,nome.length/2);
// let metadeFinalNome = nome.slice(nome.length/2, nome.length);

// let metadeIntNome = nome.slice(0,4);
// let metadeFinalNome = nome.slice(4,8);

// console.log(metadeIntNome);
// console.log(metadeFinalNome);

//         01234567
// nome = "jhonatan"
// let posicao = nome.indexOf('j');

// console.log(posicao);

// const temLetra = nome.includes('e');

// console.log(temLetra);

//replace troca somente no primeiro caracter encontrado
// const nomeModificado = nome.replace('a','*');
// const nomeModificado = nome.replaceAll('a','*');
// console.log(nomeModificado);

// const csv = "tabela1;tabela2;tabela3";
// const csvModificado = csv.replaceAll(';',',');

// console.log(csv);
// console.log(csvModificado);



