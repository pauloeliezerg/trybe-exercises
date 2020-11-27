let a = 5;
let b = 3;
let c = 4;
let aux;
let angleOne = 60;
let angleTwo = 60;
let angleThree = 60;

let operations = [ a + b, a - b, a * b, a / b, a % b ];

console.log(operations);

if (a > b) console.log(a);
    else if (b > a) console.log(b);
        else console.log('Números com mesmo valor:',a);

if (a > b) aux = a;
    else if (b > a) aux = b;
        else if (b == a) aux = a;
if (aux > c) console.log(aux);
    else if (c > aux) console.log(c);
        else console.log('Há mais de um número assumindo o maior valor:',aux);

if (a == 0) console.log('Zero');
    else if (a <= 0) console.log('Negativo');
        else console.log('Positivo');

if (angleOne <= 0 || angleTwo <= 0 || angleThree <= 0) console.log('Angulos invalidos');
    else if (angleOne+angleTwo+angleThree == 180) console.log('true');
else console.log('false');

let pecaXadrez = 'rei';
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
    case 'peao':
        console.log('1 casa ortogonal');
    break;

    case 'torre':
        console.log('Ortogonal, quantas casas quiser');
    break;

    case 'avalo':
        console.log('Em formato de L(2x1)');
    break;

    case 'bispo':
        console.log('Diagonais');
    break;

    case 'rainha':
        console.log('Ortogonal ou diagonal, quantas casas quiser');
    break;

    case 'rei':
        console.log('Na direção que quiser, 1 casa');
    break;

    default:
        console.log('Nome de peça invalido!');
}

let nota = 100;

if (nota > 100 || nota < 0) console.log('Erro');
    else if (nota >= 90) console.log('A');
    else if (nota >= 80) console.log('B');
    else if (nota >= 70) console.log('C');
    else if (nota >= 60) console.log('D');
    else if (nota >= 50) console.log('E');
else console.log('F');

let numberA = 1;
let numberB = 2;
let numberC = 3;

if ( numberA%2 == 0 || numberB%2 == 0 || numberC%2 == 0) console.log('true');
else console.log('false');

if ( numberA%2 != 0 || numberB%2 != 0 || numberC%2 != 0) console.log('true');
else console.log('false');

let custo = 100;
let valorVenda = 200;
let lucro = valorVenda - custo*1.2;

if (custo < 0 || lucro < 0) console.log('Valores invalidos');
    else console.log(lucro);

let salarioBruto = 3000;
let aliquota;
let valorIR = 0;

if (salarioBruto <= 0) console.log('Valor invalido');
    else if (salarioBruto <= 1556.94) aliquota = 0.08 * salarioBruto;
    else if (salarioBruto <= 2594.92) aliquota = 0.09 * salarioBruto;
    else if (salarioBruto <= 5189.82) aliquota = 0.11 * salarioBruto;
    else aliquota = 570.8;
let salarioBase = salarioBruto - aliquota;

if (salarioBase <= 1903.98) aliquota = 0;
    else if (salarioBase <= 2826.65) aliquota = 0.075 * salarioBase - 142.8;
    else if (salarioBase <= 3751.05) aliquota = 0.15 * salarioBase - 354.8;
    else if (salarioBase <= 3751.05) aliquota = 0.225 * salarioBase - 636.13;
    else aliquota = 0.275 * salarioBase - 869.36;
let salarioLiquido = salarioBase - aliquota;

console.log(salarioLiquido);