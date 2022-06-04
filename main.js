let sumInput = () => {
    let sum = 0;
    let inputs = [];
    let array = document.querySelector('.array');
    let result = document.querySelector('.result');

    for (;;) {
        let value = +prompt("Введите число", '');
        if (!value) break;
        inputs.push(value);
        sum += value;
    }

    array.innerHTML = `Сумма: ${sum}`;
    inputs.sort((a,b) => a - b);
    result.innerHTML = `Отсортированный массив: ${inputs}`;
}

sumInput();