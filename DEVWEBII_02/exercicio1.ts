namespace exercicio1_1{
    let nota1: number, nota2: number, nota3: number;
    let peso1: number = 2 , peso2: number = 3, peso3: number = 5;

    nota1 = 8, nota2 = 10, nota3 = 4; 
    const media:number = (nota1*peso1+nota2*peso2+nota3*peso3)/(peso1+peso2+peso3);
    
    if(media >= 8 && media <= 10){
        console.log("Conceito A")
    }else if(media >= 7 && media <= 8){
        console.log("Conceito B")
    }else if(media >= 6 && media <= 7){
        console.log("Conceito C")
    }else if(media >= 5 && media <= 6){
        console.log("Conceito D")
    }else {
        console.log("Conceito E")
    }
}

namespace exercicio1_2{
    let num1: number = 1 , num2: number =2, num3: number =3, num4: number = -1;

    if (num4 > num3){
        console.log(num4, num3, num2, num1);
    }else if (num4 > num2){
        console.log(num3 ,num4 ,num2, num1)
    }else if (num4 > num1){
        console.log(num3, num2, num4, num1)
    }else{
        console.log(num3, num2, num1, num4)
    }

}

namespace exercicio1_3{
    let numero: number = 43; 
    const resultado: string = numero % 2 == 0 ?
    "Par" : "Impar";

    console.log(resultado);
}

namespace exercicio1_4{
    const nome: string = "Pedro";
    const hora: number = 18;

    if (hora >= 0 && hora <= 12){
        console.log(`Bom dia ${nome}`)
    }else if (hora > 12 && hora <= 18){
        console.log(`Boa tarde ${nome}`)
    }else {
        console.log(`Boa noite ${nome}`)
    }
}

namespace exercicio1_5{
    let num1: number = 100 , num2: number = 53, num3: number = 12;

    let maior = Math.max(num1,num2,num3);

    console.log(maior)
}
