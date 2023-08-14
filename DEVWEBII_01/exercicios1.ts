namespace exercicio1_1{
    let numero1: number;
    let numero2: number;
    let numero3: number;    
    let numero4: number;


    numero1 = 1;
    numero2 = 2;
    numero3 = 3;
    numero4 = 4;

    let resultado: number = numero1 + numero2 + numero3 + numero4;

    console.log(`a soma dos numeros: ${numero1}, ${numero2}, ${numero3}, ${numero4} \n
    é: ${resultado}` )
}

namespace exercicio1_2{
    let numero1: number;
    let numero2: number;
    let numero3: number;    
    let numero4: number;


    numero1 = 1;
    numero2 = 2;
    numero3 = 3;
    numero4 = 4;

    let resultado: number = numero1 + numero2 + numero3 + numero4;

    let media: number = resultado / 4;

    console.log(`a media das notas: ${numero1}, ${numero2}, ${numero3}, ${numero4} \n
    é: ${media}` )

    if(media >= 7){
        console.log(`Aluno aprovado com média de: ${media}`)
    }else if(media >= 3){
        console.log(`O aluno está de recuperação com media ${media}`)
    }else{
    console.log(`Aluno reprovado com media: ${media}`)
    }
}
namespace exercicio1_3{
    let numero1: number;
    let numero2: number;
    let numero3: number;    
    let numero4: number;
    
    let peso1: number;
    let peso2: number;
    let peso3: number;    
    let peso4: number;

    numero1 = 1;
    numero2 = 2;
    numero3 = 3;
    numero4 = 4;

    peso1 = 1;
    peso2 = 2;
    peso3 = 3;
    peso4 = 4;

    let situacao: boolean = numero3 == 0 ? false : true

    //if(numero3 == 0){
    //     situacao = false
    // }else{
    //     situacao = true
    // }

    if(!situacao && numero2 >= 5){
        let media: number = (numero1 * peso1 + numero2 * peso2 + numero3 * peso3 + numero4 * peso4)/(peso1+peso2+peso3+peso4)
        console.log(`A média final é: ${media}`)
    }else{
        console.log('Aluno não entregou o trabalho e sua média foi 0')
    }

    // if(situacao){
    // let media: number = (numero1 * peso1 + numero2 * peso2 + numero3 * peso3 + numero4 * peso4)/(peso1+peso2+peso3+peso4)
    // console.log(`A média final é: ${media}`)
    // }else{
    //     console.log('Aluno não entregou o trabalho e sua média foi 0')
    // }


}

namespace exercicio1_4{
        let numero1: number;
        let numero2: number;
        let numero3: number;    
        let numero4: number;
        let media: number;
        let resultado: number;
        
    
        numero1 = 1;
        numero2 = 2;
        numero3 = 3;
        numero4 = 4;
    
        media = (numero1 + numero2 + numero3 + numero4)/4;
    
        resultado = numero1 + numero2 + numero3 + numero4;

        resultado = resultado + media;
    
        console.log(`aumento de salario: ${numero1}, ${numero2}, ${numero3}, ${numero4} \n
        é: ${resultado}` )
}