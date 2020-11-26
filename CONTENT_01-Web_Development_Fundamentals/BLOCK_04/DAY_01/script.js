let a = 55;
let b = 55;
let c = 55;
let aux;

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

