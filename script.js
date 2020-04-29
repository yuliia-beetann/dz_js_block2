"use strict"

//-------1

let $task1Field = document.querySelector('.task1 input')
let $task1Btn = document.querySelector('.task1 button')
let $task1Result = document.querySelector('.task1 .result')


let getAge = () => {
    let age = $task1Field.value
    $task1Result.innerHTML = (age < 12) ? "Ребёнок" :
    (age <18) ? "Подросток" : 
    (age <60) ? "Взрослый" :
    "Пенсионер";
}

$task1Btn.onclick = getAge


//-------2

let $task2Field = document.querySelector('.task2 input')
let $task2Btn = document.querySelector('.task2 button')
let $task2Result = document.querySelector('.task2 .result')

let getSymbol = () => {
    let number = $task2Field.value
    $task2Result.innerHTML = (number == 0) ? ")" :
    (number == 1) ? "!" :
    (number == 2) ? "@" :
    (number == 3) ? "#" :
    (number == 4) ? "$" :
    (number == 5) ? "%" :
    (number == 6) ? "^" :
    (number == 7) ? "&" :
    (number == 8) ? "*" :
    "(";
}

$task2Btn.onclick = getSymbol



//-------3

let $task3Field = document.querySelector('.task3 input')
let $task3Btn = document.querySelector('.task3 button')
let $task3Result = document.querySelector('.task3 .result')

let compare = () => {
    let num = $task3Field.value

    let third = num % 10
    let second = Math.floor ((num / 10) % 10)
    let first = Math.floor( num / 100 )

    let message = ( first == second ) || ( first == third ) || ( third == second ) ? 'Одинковые цифры есть' :
    'Одинаковых цифер нет';

    $task3Result.innerHTML = `${message}`
}

$task3Btn.onclick = compare


//-------4

let $task4Field = document.querySelector('.task4 input')
let $task4Btn = document.querySelector('.task4 button')
let $task4Result = document.querySelector('.task4 .result')

let getYear = () => {
    let year = $task4Field.value

    let message = (( year / 400 ) && (year % 400 == 0 )) || 
    ((( year / 4 ) && (year % 4 == 0 )) && (( year / 100 ) && (year % 100 != 0 ))) ? 'Высокосный' :
    'Не высокосный';

    $task4Result.innerHTML = `${message}`
}

$task4Btn.onclick = getYear


//-------5

let $task5Field = document.querySelector('.task5 input')
let $task5Btn = document.querySelector('.task5 button')
let $task5Result = document.querySelector('.task5 .result')

let polindrom = () => {
    let abcde = $task5Field.value

    let e = abcde % 10
    let d = (Math.floor (abcde / 10)) % 10;
    let c = (Math.floor (abcde / 100)) % 10;
    let b = (Math.floor (abcde / 1000)) % 10;
    let a = Math.floor (abcde / 10000);

    let message = ( a == e) && ( b == d) ? 'Число является полиндромом' : 'Число не является полиндромом';

    $task5Result.innerHTML = `${message}`
}

$task5Btn.onclick = polindrom


//-------6

let $task6Field = document.querySelector('.task6 input')
let $task6Btn = document.querySelector('.task6 button')
let $task6Result = document.querySelector('.task6 .result')

function getCurrency() {
    let sum = $task6Field.value

    let rad = document.getElementsByName('currency')
    let kurs = (rad[0].checked) ? "0.92" :
    (rad[1].checked) ? "27.06" :
    "1.7";

    let result = sum * kurs

    $task6Result.innerHTML = `${result}`
}

$task6Btn.onclick = getCurrency


//-------7

let $task7Field = document.querySelector('.task7 input')
let $task7Btn = document.querySelector('.task7 button')
let $task7Result = document.querySelector('.task7 .result')

let getDiscount = () => {
    let sum = $task7Field.value

    if (sum < 200) {
        $task7Result.innerHTML = `Скидка 0%. Сумма к оплате: ${sum} грн.`
    } else {
        let discount = (sum < 200) ? '1' :
        (sum < 300) ? '0.97' :
        (sum < 500) ? '0.95' :
        '0.93';
        let total = sum * discount
        $task7Result.innerHTML = `Сумма со скидкой: ${total} грн.`
    }
}

$task7Btn.onclick = getDiscount


//-------8

let $task8Field1 = document.querySelector('.task8 .length')
let $task8Field2 = document.querySelector('.task8 .perimetr')
let $task8Btn = document.querySelector('.task8 button')
let $task8Result = document.querySelector('.task8 .result')

let getCompare = () => {
    let length = $task8Field1.value
    let perimetr = $task8Field2.value

    let radius = length/(2*3.14);
    let side = perimetr/4

    let result = (radius == side/2) ? "Окружность может быть вписана.":
        "Окружность не может быть вписана.";
    
    $task8Result.innerHTML = `${result}`
}

$task8Btn.onclick = getCompare


//-------9

let $task9Btn = document.querySelector('.task9 button')
let $task9Result = document.querySelector('.task9 .result')

let getSum = () => {
    let inp1 = document.getElementsByName('q1')
    let a = (inp1[0].checked) ? "0" :
    (inp1[1].checked) ? "2" :
    "0";

    let inp2 = document.getElementsByName('q2')
    let b = (inp2[0].checked) ? "2" :
    (inp2[1].checked) ? "0" :
    "0";

    let inp3 = document.getElementsByName('q3')
    let c = (inp3[0].checked) ? "0" :
    (inp3[1].checked) ? "0" :
    "2";

    let sum = +a + +b + +c

    $task9Result.innerHTML = `Сумма баллов: ${sum}`
}

$task9Btn.onclick = getSum


//-------10

let $task10Field1 = document.querySelector('.task10 .year')
let $task10Field2 = document.querySelector('.task10 .month')
let $task10Field3 = document.querySelector('.task10 .day')

let $task10Btn = document.querySelector('.task10 button')
let $task10Result = document.querySelector('.task10 .result')

let getDate = () => {
    let year = $task10Field1.value
    let month = $task10Field2.value
    let day = $task10Field3.value
    
    let checkYear = (( year / 400 ) && (year % 400 == 0 )) || 
    ((( year / 4 ) && (year % 4 == 0 )) && (( year / 100 ) && (year % 100 != 0 ))) ? 'True' :
    'False';

    if ((month > 12 || day > 31) || (month == 2 && checkYear == 'False' && day > 28) || (month == 2 && checkYear == 'True' && day > 29)) {
        $task10Result.innerHTML = `Данные введены некорректно`
    } else {
    
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day == 31 && month != 12) {
                month++
                day = 1
            } else if (day == 31 && month == 12) {
                year++
                day = 1
                month = 1
            } else {
                day++
            }
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            if (day == 30) {
                month++
                day = 1
            } else {
                day++
            }
        } else if (month == 2 && day < 28) {
            day++
        } else if (month == 2 && checkYear == 'True' && day == 28) {
            day ++
        } else if ((month == 2 && checkYear == 'False' && day == 28) || (month == 2 && checkYear == 'True' && day == 29)) {
            month++
            day = 1
        }

        let date = year + "." + month + "." + day
        $task10Result.innerHTML = `Следующая ${date}`
    }
}

$task10Btn.onclick = getDate