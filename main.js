const array = document.querySelector('.array');
const result = document.querySelector('.result');

let sumInput = () => {
    let sum = 0;
    let inputs = [];

    while (true) {
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
