//Part 1

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald"
};

console.log('Bem vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key]);
}

let infoTwo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let key in info) {
    if (
        info[key] === info.recorrente &&
        info[key] === 'Sim' &&
        infoTwo[key] === 'Sim'
    ) {
        console.log('Ambos recorrentes')
    }
    else {
        console.log(info[key] + ' e ' + infoTwo[key]);
    }
}

// Part 2

function palindromeCheck(sentence) {
    for (let index in sentence) {
        if (sentence[index] != sentence[(sentence.length - 1) - index])
            return false;
        return true;
    }
}

console.log(palindromeCheck('carro'));

function highestNumberCheck(integers) {
    let highestInteger = 0;
    for (let index in integers) {
        if (integers[index] >= highestInteger)
            highestInteger = integers[index];
    }
    return highestInteger;
}

console.log(highestNumberCheck([2, 3, 6, 7, 10, 1]));

function lowestNumberCheck(integers) {
    let lowestInteger = 0;
    for (let index in integers) {
        if (integers[index] <= lowestInteger)
            lowestInteger = integers[index];
    }
    return lowestInteger;
}

console.log(lowestNumberCheck([2, 4, 6, 7, 10, 0, -3]));

function biggestNameCheck(names) {
    let biggestName = '';
    for (let index in names) {
        if (names[index].length >= biggestName.length) {
            biggestName = names[index];
        }
    }
    return biggestName;
}

console.log(biggestNameCheck(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function mostRepeatedNumberCheck(integers) {
    let mostRepeatedNumber = 0;
    let repeatCount = [];
    for (index in integers) {
        for (repeatIndex in integers) {
            if (integers[index] === integers[repeatIndex]) {
                if (!repeatCount[index])
                    repeatCount[index] = 0;
                repeatCount[index] += 1;
                if (repeatCount[index] && repeatCount[index] > repeatCount[index-1])
                    mostRepeatedNumber = integers[index];
            }
        }
    }
    return mostRepeatedNumber;
}

console.log(mostRepeatedNumberCheck([2, 3, 2, 5, 8, 2, 3]));

function gaussSum(integer) {
    let sumValue = 0;
    for (index = 1; index <= integer; index += 1){
        sumValue += index;
    }
    return sumValue;
}

console.log(gaussSum(5));
