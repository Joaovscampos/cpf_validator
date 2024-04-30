class Validacpf{
    constructor(cpf){
        this.cpf = cpf;
    };

   get cpfLimpo(){
     return this.cpf.replace(/\D+/g, '');
   };

   validaCPF(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
   };

   criaDigito(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    const total = cpfArray.reduce((ac,val,ind) => ac + (val * (cpfArray.length + 1 - ind)), 0);
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
   };
   
   isSequencia(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
   };
}

