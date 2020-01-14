// 1. Если а – четное посчитать а*б, иначе а+б

function evenNumber(a, b) {

    let sum = 0;

    if(a % 2 == 0) {
        sum = a * b;
    } else {
        sum = a + b;
    }
    console.log(sum);
}



// 2. Определить какой четверти принадлежит точка с координатами (х,у)

function coordinateQuarter(x, y) {

    if (x > 0 && y > 0) {
        console.log('I четверть');
    } 
    else if (x < 0 && y > 0) {
        console.log('II четверть');
    } 
    else if (x < 0 && y < 0) {
        console.log('III четверть');
    } 
    else if (x > 0 && y < 0) {
        console.log('IV четверть');
    } 
    else {
        console.log('Something wrong...');
    }

}


// 3. Найти суммы только положительных из трех чисел

function positiveNumbers(a, b, c) {
    let sum = 0;

    if(a > 0) {
        sum += a;
    }
    if(b > 0) {
        sum += b;
    }
    if(c > 0) {
        sum += c;
    }
    console.log(sum);
}


// 4. Посчитать выражение макс(а*б*с, а+б+с)+3

function maxExpression(a, b, c) {
    let sum = 0;
    
    if((a * b * c) > (a + b + c)) {
        sum = (a * b * c) + 3;
    } 
    else {
        sum = (a + b + c) + 3;
    }
    console.log(sum);
}


// 5. Написать программу определения оценки студента по его рейтингу

function studentRating(mark) {

    if (mark >= 0 && mark <= 19) {
        console.log('Ваша оценка "F"');
    }
    else if (mark >= 20 && mark <= 39) {
        console.log('Ваша оценка "E"');
    }
    else if (mark >= 40 && mark <= 59) {
        console.log('Ваша оценка "D"');
    }
    else if (mark >= 60 && mark <= 74) {
        console.log('Ваша оценка "C"');
    }
    else if (mark >= 75 && mark <= 89) {
        console.log('Ваша оценка "B"');
    }
    else if (mark >= 90 && mark <= 100) {
        console.log('Ваша оценка "A"');
    }
    else {
        console.log('Число вне диапозона от 0 - 100');
    }
}


// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function numbersAndQuantity() {
    let sum = 0;
    let quantity = 0;

    for(let i = 0; i <= 99; i++) {

        if (i % 2 == 0) {
            sum += i;
            quantity++;
        }
    }
    console.log(`Сумма чисел = ${sum}`);
    console.log(`Количество чисел = ${quantity}`);
}


//2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function simpleNumber(numb) {

    if (numb < 2) {
        console.log(`Число ${numb} - составное`);
        return;
    }


    for (let i = 2; i < numb; i++) {

        if (numb % i == 0) {
            console.log(`Число ${numb} - составное`);
            return;
        }
    }
    console.log(`Число ${numb} - простое`);
    return;
}


//3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

//Последовательный подбор:

function naturalNumber(numb) {
    let sum = 0;

    for(let i = 0; i < numb; i++) {
        if(numb > 1) {
            sum = Math.sqrt(numb);
            sum = Math.floor(sum);
            
        }
    }
    console.log(sum);
}
//------------------------------------------------------------
// function naturalNumber1(numb) {
//     let sum = 0;

//     if (numb > 1) {
//         sum = 2 * (numb + numb) / 10;
//         sum /= 2;
//     }
//     console.log(sum);
// }
// naturalNumber1(27);
//-------------------------------------------------------------
// Бинарный поиск:

function binarySearch(value) {

    let index = value;
    for(let i = 0; i < value; i++) {

        if (index * index > value) {
            index /= 2;
        }
        if (index * index < value) {
            index++;
        }
        
    }
    console.log(Math.round(index));
    
        
}



// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

function factorial(n) {
    if( n === 0) {
        return 1;
    }
    else {
        return factorial(n - 1) * n;
    }
}


// 5. Посчитать сумму цифр заданного числа

function sumOfNumber(x) {
    let sum = 0;

    for(let i = 0; i <= numb; i++) {
        sum += i;
    }

    console.log(`Сумма чисел = ${sum}`);
}



//6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.


function myReverse(num) {
    console.log(num);
    let array = [];
    let reverse = [];
    
    let stringNumber = num.toString();
    for(let i = 0; i < stringNumber.length; i++) {
        array.push(+stringNumber.charAt(i));
    }

    for(let i = 0; i < array.length; i++) {
        reverse.unshift(array[i]);
    }

    console.log(reverse);
}


// 1. Найти минимальный элемент массива

function sortArray(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
}

function minElementOfArray(array) {
    array.sort(sortArray);
    console.log(`Минимальный элемент массива: ${array[0]}`);

}


//2. Найти максимальный элемент массива

function maxElementOfArray(array) {
    array.sort(sortArray);
    console.log(`Максимальный элемент массива: ${array[array.length - 1]}`);
}


//3. Найти индекс минимального элемента массива

function minElementIndexOfArray(array) {
    let minElement = 0;
    array.forEach((item, index) => {

        if (item < array[minElement]) {
            minElement = index;
        }
        else {
            return false;
        }
    });
    console.log(`Индекс минимального элемента массива: ${minElement}`);
    
}

// 4. Найти индекс максимального элемента массива

function maxElementIndexOfArray(array) {
    let maxElement = 0;

    array.forEach((item, index) => {
        if(item > array[maxElement]) {
            maxElement = index;
        }
        else {
            return false;
        }
    });
    console.log(`Индекс максимального элемента массива: ${maxElement}`);
}

// 5. Посчитать сумму элементов массива с нечетными индексами 

function sumOddIndexes(array) {
    let sumIndex = 0;
    
    array.forEach(function(item, ind) {
        if(ind % 2 != 0) {
            sumIndex += ind;
        }
    });
    console.log(sumIndex);
}


// 6. Сделать реверс массива (массив в обратном направлении) 

function arrayReverse(array) {
    let reverse = [];
    for(let i = 0; i < array.length; i++) {
        reverse.unshift(array[i]);
    }
    console.log(reverse);
}



// 7. Посчитать количество нечетных элементов массива
function sumOddNumbers(array) {
    var sumNumbers = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            sumNumbers += array[i];
        }
    }
    console.log(sumNumbers);
}


// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function changePlaceOfArray(array) {
    for(let i = 0; i < array.length / 2; i++) {
        array.push(array.shift());
    }
}


// 9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// Пузырьком:
function bubbleSort(array) {
    let swapped;

    do {
        swapped = false;
        console.log(array);
        array.forEach((item, index) => {
            if (item > array[index + 1]) {
                let temp = item;
                array[index] = array[index + 1];
                array[index + 1] = temp;
                swapped = true;
            }
        });
    } while (swapped);
}


// Выбором:

function selectionSort(array) {
    let value = array.length;

    for(let i = 0; i < value - 1; i++) {
        let min = i;

        for(let j = i + 1; j < value; j++) {
            
            if (array[j] < array[min]) {
            min = j;
            } 
        }
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
    }
        console.log(array);
        return array;
}


// Вставками

function insertSort(array) {
    let value = array.length;

    for(let i = 0; i < value; i++) {
        let value = array[i];
        let temp = i - 1;

        while(temp >= 0 && array[temp] > value) {
            array[temp + 1] = array[temp];
            temp--;
            array[temp + 1] = value;
        }
    }
    return array;
}


// quick

function quickSort(array)
{
    console.log(array);
    if (array.length < 2) {
        return array;
    } else {
        let pivot = array[Math.floor(Math.random() * array.length)];
        let less = array.filter(value => value < pivot);
        let greater = array.filter(value => value > pivot);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}






//Функции

// 1. Получить строковое название дня недели по номеру дня. 

function weekName(mySelect) {

    switch(mySelect) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            console.log('Неверный день недели');
    }
    
}


// 2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function decart(x1, y1, x2, y2){
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt(a * a + b * b);
    console.log(`Расстояние между двумя точками: ${c.toFixed()}`);
}

function anotherDecart(x1, y1, x2, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    let c = 2 * (a * a + b * b) / 10;
    console.log(`Расстояние между двумя точками: ${c}`);
}


