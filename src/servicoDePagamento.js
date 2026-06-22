export default class ServicoDePagamento {
  #pagamentos
  
  constructor() {
    this.#pagamentos = [];
  }
  
  pagar(codigoDeBarras, empresa, valor){
    let categoria;
    if(valor > 100.00){
      categoria = 'cara'
    }else{
      categoria = 'padrao'
    }
    this.#pagamentos.push({
      codigoDeBarras: codigoDeBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    });
  };

  consultar(){
    return this.#pagamentos.at(-1)
  }
  
  
}