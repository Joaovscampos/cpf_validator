# MVP Validação de CPF 

  
## Lógica Utilizada
* CPF  705.484.450-52

###  1. Pegando os nove primeiros dígitos do CPF e multiplicando por uma sequência regressiva começando por 10, obtemos o total:
* 7x10 0x9 5x8 4x7 8x6 4x5 4x4 5x3 0x2
* 70 0 40 28 48 20 16 15 0 = **237**

### 2. Descobrindo o penúltimo digito
*  11 - (237 % 11) = **5** (penúltimo digito)
* Se o número digito for maior que 9, consideramos 0.

###  3. Descobrindo o ultimo digito 
7x11 0x10 5x9 4x8 8x7 4x6 4x5 5x4 0x3 5x2
77    0   45  32  56  24  20  20   0  10 = **284**

### 4. Descobrindo o último digito
*  11 - (284% 11) = **5** (penúltimo digito)
* Se o número digito for maior que 9, consideramos 0.

 ## Tecnologias Utilizadas
 * JavaScript
 * HTML
 
 ## Funcionalidades
 A aplicação permite receber um cpf e verificar se o mesmo é válido de acordo com as normas impostas pela receita federal. Em breve pretendo criar um gerador de cpf valido e complexar/melhorar a estética da aplicação.

## Autor
Este projeto foi desenvolvido por mim como parte de um exercício de prática em JavaScript.

Se houver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato pelo email [jvitor.scampos@outlook.com](mailto:jvitor.scampos@outlook.com).

### Nota: Este projeto é apenas para fins educacionais e de aprendizado.