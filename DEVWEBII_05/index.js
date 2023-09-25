const {createApp} = Vue;
createApp({
    data(){
        return {
            display: '0',
            numeroAtual: null,
            numeroAnterior: null,
            operador: null
        }
    },
    methods: {
        lidarBotao(botao){
            // console.log(botao)
            switch(botao){
                case "+":
                case "-":
                case "*":
                case "/":
                    this.lidarOperador(botao);

                    break;
                case "=":
                    this.lidarIgual(botao);
                    break;
                case ".":
                    this.lidarDecimal(botao);
                    break;
                default:
                    this.lidarNumeros(botao);
                    break;                           
            }
        },

        lidarNumeros(numero){
            if(this.display == '0'){
                console.log(this.display)
                this.display = ''
            }else{
                this.display += numero.toString();
            }
        },

        lidarOperador(numero){
            if(this.display == '+' || this.display == '-' || this.display == '*' || this.display == '/'){
                this.display += numero.toString();
            }
        },
    }
}).mount('#app')