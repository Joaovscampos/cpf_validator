function ValidaCpf(){
    this.display = document.querySelector('.display');
}

ValidaCpf.prototype.trataCpf = function(){
    document.addEventListener('click',(e) => {
        const el = e.target; 

        if(el.classList.contains('botao')){
            const cpfLimpo = this.display.value.replace(/\D+/g, '');
            if(cpfLimpo.length !== 11) 
            return alert ('cpf inválido');
            
            const arrayCpf = cpfLimpo.split(''); 
            const sequencia = arrayCpf[0].repeat(arrayCpf.length);
            
            if(sequencia === cpfLimpo)
            return alert ('cpf inválido');
    
            let penultimoChar = Number(arrayCpf.splice(9, 1).join());  
            let ultimoChar = Number(arrayCpf.pop()); 
            
            let somaChar1 = arrayCpf.reduce ((acumulador,valor,indice) => acumulador + (valor * (10 - indice)),0); 

            let digito1 = 11 - (somaChar1 % 11);
            if(digito1 > 9){digito1 = 0};

            const array10Char = [...arrayCpf, digito1];
            
            let somaChar2 = array10Char.reduce ((acumulador,valor,indice) => acumulador + (valor * (11 - indice)),0);

            
            let digito2 = 11 - (somaChar2 % 11);
            if(digito2 > 9){digito2 = 0};
            if(penultimoChar > 9){penultimoChar = 0};
            if(ultimoChar > 9){ultimoChar = 0};

            if(penultimoChar !== digito1 || ultimoChar !== digito2)
            return alert ('cpf inválido');   
            
            alert ('cpf válido');    
        }
    })
}

const cpf = new ValidaCpf();
cpf.trataCpf();
