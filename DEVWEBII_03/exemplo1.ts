namespace exemlo1{
    let numero: number = 25;
    let i: number = 0;

    do {
        i++;
        numero = i == 11 ? 19 : 18;
        
        console.log("numero: "+i);
    } while (i < numero);

 
}

namespace exemplo2{
    let numero: number = 25;
    let i: number = 0;

    while (i <= numero) {
        console.log("numero: "+i);
        console.log("numero: "+i);
        i++;
    }
}

namespace exemplo3{
    let numero: number = 25;

    for (let i = 0; i <= numero; i++) {
        console.log("numero: "+i);  
    } 
}
