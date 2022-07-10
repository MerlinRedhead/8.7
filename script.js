let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
let answerPhrase;
minValue = minValue >= 1000 ? 999 : minValue <= -1000 ? -999 : minValue;
maxValue = maxValue >= 1000 ? 999 : maxValue <= -1000 ? -999 : maxValue;

minValue = minValue != parseInt(minValue) ? 0 : minValue;
maxValue = maxValue != parseInt(maxValue) ? 100 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    minValue = minValue >= 1000 ? 999 : minValue <= -1000 ? -999 : minValue;
    maxValue = maxValue >= 1000 ? 999 : maxValue <= -1000 ? -999 : maxValue;


    minValue = minValue != parseInt(minValue) ? 0 : minValue;
    maxValue = maxValue != parseInt(maxValue) ? 100 : maxValue;


    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
             if(phraseRandom===1){
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
             }
             else if (phraseRandom === 2){
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
             }
             else if (phraseRandom === 3){
                answerPhrase = 'Ты победил';
             }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
                phraseRandom = Math.round( Math.random()*3);
                if(phraseRandom===1){
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                 }
                 else if (phraseRandom === 2){
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                 }
                 else if (phraseRandom === 3){
                    answerPhrase = 'Ты победил';
                 }
    

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerRandom = Math.round( Math.random()*3);
            if (answerRandom === 1){
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
            }
            else if (answerRandom === 2){
                answerField.innerText = `Это легко! Вы загадали ${answerNumber }?`;
            }
            else if (answerRandom === 3){
                answerField.innerText = `Это число ${answerNumber }?`;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        if (answerRandom === 1){
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        }
        else if (answerRandom === 2){
            answerField.innerText = `Я победил!\n\u{1F60E}`
        }
        else if (answerRandom === 3){
            answerField.innerText = `Хе-Хе`
        }
        gameRun = false;
    }
})