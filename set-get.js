class Pagamento{
    constructor(valor){
        this.valor = valor;
    }
    get valor(){
        return this.valor;
    }
    set valor(centavos){
        this.valor = centavos * 100;
    }
    
}