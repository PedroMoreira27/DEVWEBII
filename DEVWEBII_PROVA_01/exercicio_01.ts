namespace Soma2Numeros{
    let num1 = 1, num2 = 2 , resultado = 0;
    resultado = num1 + num2;
    console.log(resultado)
}

namespace VerificaPar{
    let verifica: string = '';

    for (let i = 0; i < 100; i++) {
        verifica = i%2  ? 'impar' : 'par'
        console.log(`O numero ${i} é ${verifica}`)
    }

}

namespace SomaPar{
    let soma: number = 0;
    for (let i = 0; i < 100; i++) {
        soma = i%2  ? soma += 0 : soma += i
    }
    console.log(`O total da soma entre numeros pares de 1 a 100 é: ${soma}`)
}

namespace MediaNotas{
    let nota1 = 5, nota2 = 6, nota3 = 9, media = 0;

    media = (nota1 + nota2 + nota3)/3
    
    console.log(`A media entre as notas é: ${media}`)
}

namespace CalculaArea{
    let area: number = 0;

    function calcArea(largura: number,altura: number){
        area =  largura*altura;
        return console.log(`A area é: ${area}`)
    }

    calcArea(2,3)
}

namespace FatorialNInteiro{

    function fatorial(num: number){
        let res: number = num, len = num;
        for (let i = 0; i < len; i++) {
            if(num > 2){
                res *= num-1;
                num--;
                console.log(res);
            }
        }
    }
    fatorial(5)
}

namespace Piramide{
    function fazpiramide(len: number){
    
        let piramide: string = '*';

        for (let i = 0; i < len; i++) {
            piramide += '*'
            console.log(piramide) 
        }
    }
    fazpiramide(50)
}

namespace Calculadora{

    function calcula(operacao:string, num1: number, num2:number) {
        
        if(num1 && num2 != 0){
            operacao = '+'
            if(operacao == '+'){
               return console.log(num1 + num2)
            }
            operacao = '-'
            if(operacao == '-'){
                return console.log(num1 - num2)
            }
            operacao = '*'
            if(operacao == '*'){
                return console.log(num1 * num2)
            }
            operacao = '/'
            if(operacao == '/'){
                return console.log(num1 / num2)
            }
        }else{
            console.log("impossivel fazer uma operação com 0")
        }
    }

    calcula('*', 3, 7)

}
