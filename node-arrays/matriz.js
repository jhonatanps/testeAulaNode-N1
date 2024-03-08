
const matriz = [
                [1,2,3],//0
                [4,5,6],//1
                [7,8,9]//2
            ];

//array de fora      0       1       2
//arrays de dentro 0 1 2   0 1 2   0 1 2
//                [[1,2,3],[4,5,6],[7,8,9]] 

//         linha   
//consulta[ {}, {}, {}];


for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i]);
}

//1
for(let i = 0; i < matriz.length; i++){
    //2
    for(let t = 0; t < matriz[i].length; t++){
        console.log(matriz[i][t]);
    }
}

