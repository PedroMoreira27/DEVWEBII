namespace exercicio1_1{
    let numeros: number[] = [1,2,3,4,5];
    let total: number = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
        
    }
    console.log(total);
    console.log();

}

namespace exercicio1_2{
    let frutas: string[] = ["Maçã","Pera","Uva"];
    let i: number = 0;

    while (i < frutas.length) {
        console.log(frutas[i]);

        i++;
    }
    console.log();

}

namespace exercicio1_3{
    function criarArray(num1:number, num2: number, num3: number){
        let array: number[] =[];
        array.push(num1);
        array.push(num2);
        array.push(num3);
        return array;
    }

    let arrayInicial: number[] = criarArray(20,30,40);

    function removeValor(array:number[]){
        if(array.length > 0){
            array.pop();
        }
        return array
    }

    let arrayModificado = removeValor(arrayInicial);
    console.log(`array modificado: ${arrayModificado}`)

    let lista: number[] = [];
    let i: number = 0;

    while (i < 3) {
        lista.push(i);
        i++;       
    }
    lista.pop();
    console.log(lista)
}