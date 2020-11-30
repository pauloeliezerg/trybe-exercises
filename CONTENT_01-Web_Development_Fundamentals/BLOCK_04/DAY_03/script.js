let n = 5;
let aster = '*';
let line = [];
let breakline = '\n';

for (let index = 0; index < n; index += 1) {
    for (let secondaryIndex = 0; secondaryIndex < n; secondaryIndex += 1) {
        line += aster;
        if (secondaryIndex == n-1) line += breakline;
    }
}

console.log(line);

line = []; //reseting "line" value to a empty string

for (let index = 0; index < n; index += 1) {
    line += aster;
    console.log(line);
}

line = [];
let space = ' ';

for (let index = 0; index < n; index += 1) {
    for (let secondaryIndex = n; secondaryIndex > 0; secondaryIndex -= 1) {
        if (secondaryIndex > index+1) line += space;
        else {
            line += aster;
        }
        if (secondaryIndex == 1) line += breakline;
    }
}

console.log(line);

line = [];
let lineCounter = 0;
let middleFloor = Math.floor(n/2);
let middleCeil = Math.ceil(n/2);

if (n%2 != 0) {
    for (let index = 0; index < middleCeil; index += 1) {
        for (let secondaryIndex = n; secondaryIndex >= 0; secondaryIndex -= 1) {
            if (secondaryIndex == middleFloor || secondaryIndex <= middleFloor + lineCounter && secondaryIndex >= middleFloor - lineCounter)
                line += aster;
            else
                line += space;
            if (secondaryIndex == 0) {
                lineCounter += 1;
                line += breakline;
            }
        }
    }
}
else {
    middleCeil += 1;
    for (let index = 0; index < middleFloor; index += 1) {
        for (let secondaryIndex = n; secondaryIndex >= 0; secondaryIndex -= 1) {
            if (secondaryIndex == middleFloor || secondaryIndex == middleCeil || secondaryIndex <= middleCeil + lineCounter && secondaryIndex >= middleFloor - lineCounter)
                line += aster;
            else
                line += space;
            if (secondaryIndex == 0) {
                lineCounter += 1;
                line += breakline;
            }
        }
    }
}

console.log(line);

line = [];
lineCounter = 0;

if (n%2 != 0) {
    for (let index = 0; index < middleCeil; index += 1) {
        for (let secondaryIndex = n-1; secondaryIndex >= 0; secondaryIndex -= 1) {
            if (secondaryIndex == middleFloor + lineCounter || secondaryIndex == middleFloor - lineCounter || lineCounter == middleFloor)
                line += aster;
            else
                line += space;
            if (secondaryIndex == 0) {
                lineCounter += 1;
                line += breakline;
            }
        }
    }
    console.log(line);
}
else
    console.log('Número inválido!');

let primeNumberCheck = 11;
let divisorCountIndex = 0;

for (let index = 1; index <= primeNumberCheck; index += 1) {
    if (primeNumberCheck%index == 0)
        divisorCountIndex += 1;
}

if (divisorCountIndex < 3)
    console.log('Número primo!');
else
    console.log('Número não-primo!');