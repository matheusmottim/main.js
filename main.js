//declaraçao de variaveis
let nome ="matheus;"
const idade =16;
var cidade= "sao paulo";

//operadores matematicos
let a =10;
let b= 5;

let soma = a+b;
let subtracao= a-b;
let multiplicacao = a*b;
let divisao = a/b;
let resto = a%b;
let potencia = a**b;
let incremento = ++a;
let decremento =--b;

//operadores de comparacao

let igual = (a==b);
let diferente = (a!=b);
let maior = (a>b);
let menor = (a<b);
let maiorouigual = (a>=b);
let menorouigual = (a<=b);

// operadores logicos
let elogico = (a>5&&b<10);
let oulogico = (a>5||b<10);
let naologico = (a>5);

// operadores de atribuicao

let c = 10;
c+=5; // c=c +5
c-=3;// c = c -3
c*=2; // c = c* 2
c/=4;// c = c /4
c%=3; // c = c %3
c**= 2; // c = c **2

// operadores de concatenacao (uniao de textos)
let mensagem = "ola, meu nome é " +nome+", tenho "+idade+" anos e moro com" +cidade+".";
// exibir resultados no console
console.log ("soma:"+soma);
console.log ("subtracao:"+subtracao);
console.log ("multiplicacao:"+multiplicacao);
console.log ("divisao:"+divisao);
console.log ("resto da divisao:"+resto);
console.log ("potencia:"+potencia);
console.log ("incremento de a:"+incremento);
console.log ("decremento de b:"+decremento);
console.log ("igualdade:"+igual);
console.log ("diferença:"+diferente);
console.log ("maior que:"+maior);
console.log ("menor que:"+menor);
console.log ("e logico:"+elogico);
console.log ("ou logico:"+oulogico);
console.log ("negacao logica:"+ naologico);
console.log ("valor de c apos atribuicoes:"+ c);
console.log (mensagem);