namespace exercicio1_1{
    let i: number = 0;
    let primo: string;
    while (i < 60) {
        primo = i % i == 0 && i / 1 == i ? "primo" : "não primo"
        console.log(`o numero ${i} é ${primo}`)
        i++
    }
}

// namespace exercicio1_2{
//     let lista: number[];
//     lista = 
//     console.log(lista)
// }

// namespace exercicio1_1{
//     let i: number = 0;
//     let numero: number;
//     let divisivel: string;
//     while (i < numero) {
//         divisivel = i / 3 ==  ? "numero divisivel por 3" : "numero não divisivel por 3"
//         console.log(`o numero ${i} é ${numero}`)
//         i++
//     }
// }