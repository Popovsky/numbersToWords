const text = prompt('Enter the number').split('');
const units = ['одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'ноль'];
const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const tens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const hundreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
const names = ['гривна', 'гривны', 'гривен'];
const a = text.map(el => +el);
switch (a.length) {
    case 1:
        if (a[0] === 1) {
            console.log(`${units[a[0] - 1]} ${names[0]}`);
        } else if (a[0] > 1 && a[0] < 5) {
            console.log(`${units[a[0] - 1]} ${names[1]}`);
        } else console.log(`${units[a[0] - 1]} ${names[2]}`);
        break;
    case 2:
        if (a[0] === 1) {
            console.log(`${teens[a[1]]} ${names[2]}`);
        } else if (a[1] === 0 && a[0] > 1) {
            console.log(`${tens[a[0] - 2]} ${names[2]}`);
        } else if (a[1] === 1 && a[0] > 1) {
            console.log(`${tens[a[0] - 2]} ${units[a[1] - 1]} ${names[0]}`);
        } else if (a[1] > 1 && a[1] < 5 && a[0] > 1) {
            console.log(`${tens[a[0] - 2]} ${units[a[1] - 1]} ${names[1]}`);
        } else console.log(`${tens[a[0] - 2]} ${units[a[1] - 1]} ${names[2]}`);
        break;
    case 3:
        if (a[1] === 0 && a[2] === 0) {
            console.log(`${hundreds[a[0] - 1]} ${names[2]}`);
        } else if (a[1] === 0 && a[2] === 1) {
            console.log(`${hundreds[a[0] - 1]} ${units[a[2] - 1]} ${names[0]}`);
        } else if (a[1] === 0 && a[2] > 1 && a[2] < 5) {
            console.log(`${hundreds[a[0] - 1]} ${units[a[2] - 1]} ${names[1]}`);
        } else if (a[1] === 0) {
            console.log(`${hundreds[a[0] - 1]} ${units[a[2] - 1]} ${names[2]}`);
        } else if (a[1] === 1) {
            console.log(`${hundreds[a[0] - 1]} ${teens[a[2]]} ${names[2]}`);
        } else if (a[2] === 0 && a[1] > 1) {
            console.log(`${hundreds[a[0] - 1]} ${tens[a[1] - 2]} ${names[2]}`);
        } else if (a[2] === 1 && a[1] > 1) {
            console.log(`${hundreds[a[0] - 1]} ${tens[a[1] - 2]} ${units[a[2] - 1]} ${names[0]}`);
        } else if (a[2] > 1 && a[2] < 5 && a[1] > 1) {
            console.log(`${hundreds[a[0] - 1]} ${tens[a[1] - 2]} ${units[a[2] - 1]} ${names[1]}`);
        } else console.log(`${hundreds[a[0] - 1]} ${tens[a[1] - 2]} ${units[a[2] - 1]} ${names[2]}`);
        break;
    default:
        console.log('default');
        break;
}
