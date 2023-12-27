let resultFunctionSum = 0;
    let resultFunctionMinus = 0;
    let resultFunctionDivide = 0;
    let resultFunctionMultyply = 0;
    let numberInteger = 0;
    let result = '';
    let numberOneTranslation = 1;
    let numberSecondTranslation = 1;
    let stringMatch = [];
    let stringMatchRomes = [];
    let currentFunctionResultRomes = null;


    const romes = {'C' : 100, 'XC' :  90, 'L' : 50, 'XL' : 40, 'XXX' : 30, 'X' : 10, 'IX' : 9, 'VIII' : 8, 'VII' : 7, 'VI' : 6, 'V': 5, 'IV' : 4, 'III' : 3, 'II' : 2, 'I' : 1}

    function calculator (string = '10+10') {
    let noSpaceText = string.replace(/ /g, '');

    const stringMatchPattern = new RegExp('^([1-9]|[1][0])([*+\-\/])([1-9]|[1][0])$');
    stringMatch = noSpaceText.match(stringMatchPattern);
    const stringMatchPatternRomes = new RegExp('^([I]|[I]|[I][I][I]|[I][V]|[V]|[V][I]|[V][I][I]|[I][X]|[X])([*+\-\/])([I]|[I]|[I][I][I]|[I][V]|[V]|[V][I]|[V][I][I]|[I][X]|[X])$')
    stringMatchRomes = noSpaceText.match(stringMatchPatternRomes);

    const functionSum = () => resultFunctionSum = numberOneTranslation + numberSecondTranslation;

    const functionMinus = () => resultFunctionMinus = numberOneTranslation - numberSecondTranslation;

    const functionDivide = () => {
    resultFunctionMultyply = numberOneTranslation / numberSecondTranslation;
    numberInteger = parseInt(resultFunctionMultyply,10);
    return numberInteger;
    }

    const functionMultyply = () => resultFunctionMultyply = numberOneTranslation * numberSecondTranslation;

    if (stringMatch === null && stringMatchRomes === null) {
        return result = 'Error Throw!!!'
    }

    if (stringMatch !== null) {
        numberOneTranslation = Number(stringMatch[1]);
        numberSecondTranslation = Number(stringMatch[3]);
        switch (stringMatch[2]) {
        case '+': result = functionSum();
                  break;
        case '-': result = functionMinus();
                  break;
        case '/': result = functionDivide();
                  break;
        case '*': result = functionMultyply();
                  break;
        default: result = 'Error throw!';
    }
    }

    if (stringMatchRomes !== null) {
        for (keysRomesFirst in romes) {
            if (keysRomesFirst === stringMatchRomes[1] )
            numberRomesFirst = romes[keysRomesFirst];

        }
        for (keysRomesSecond in romes) {
            if (keysRomesSecond === stringMatchRomes[3])
            numberRomesSecond = romes[keysRomesSecond];

        }
        numberOneTranslation = numberRomesFirst;
        numberSecondTranslation = numberRomesSecond;

        switch (stringMatchRomes[2] ) {
            case '+': currentFunctionResultRomes = functionSum();
            break;
            case '-': currentFunctionResultRomes = functionMinus();
            break;
            case '/': currentFunctionResultRomes = functionDivide();
            break;
            case '*': currentFunctionResultRomes = functionMultyply();
            break;
            default: result = 'Error Throw!';
        }
    }

    if (currentFunctionResultRomes !== null ) {
    const convertationRomesNumber = () => {
        for (let keysConverterRome in romes) {
            while(romes[keysConverterRome] <= currentFunctionResultRomes) {
                result += keysConverterRome;
                currentFunctionResultRomes = currentFunctionResultRomes - romes[keysConverterRome];
            }
        }
        return result;
    }
    result = convertationRomesNumber();
} else if (currentFunctionResultRomes <= 0 && currentFunctionResultRomes !== null)  {
    result = ' ';
}
    return String(result);
}


module.exports = calculator; // Не трогайте эту строчку