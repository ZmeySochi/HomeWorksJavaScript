//1.Реализуйте функцию, которая выводит в консоль переданный ей список аргументов.
/*
let countOne='Hello'
let countTwo='World'
function foo (count1,count2){
    console.log(count1,count2)
}
foo(countOne,countTwo)*/


//2.Реализуйте функцию, которая получает на вход два числа и проверяет какое из
// них больше. Функция должна возвращать 1 если первое число больше второго,
// -1 если меньше и 0 если числа совпадают.
/*
let inputOne=prompt('Введите первое число')
let inputTwo=prompt('Введите второе число')
function result(countOne,countTwo)
{
    (Number(countOne)>Number(countTwo))?alert('результат сравнения 1'):
        (Number(countOne)<Number(countTwo))?alert('результат сравнения -1'):alert('результат сравнения 0')

}
result(inputOne,inputTwo)*/



//3.Используя стрелочные функции запишите следующие функции:
// a.Функция суммирования двух чисел
// b.Функция разности двух чисел
// c.Функция умножения двух чисел
// d.Функция деления двух чисел
/*
let countOne=10
let countTwo=5
let a=(valueOne,valueTwo)=>countOne+countTwo
console.log(`a=${a(countOne,countTwo)}`)
let b=(valueOne,valueTwo)=>countOne-countTwo
console.log(`b=${Math.abs(b(countOne,countTwo))}`)
let c=(valueOne,valueTwo)=>countOne*countTwo
console.log(`c=${c(countOne,countTwo)}`)
let d=(valueOne,valueTwo)=>countOne/countTwo
console.log(`d=${d(countOne,countTwo)}`)*/



//4.Реализуйте функцию, которая выводит в консоль сообщение “Здравствуйте,
// (name)”, где name - параметр функции. Сделайте так, чтобы параметром этой
// функции по-умолчанию было слово “гость”.
/*
let name='Иван'
function greeting(name){
    if(name){
        console.log(`Здравствуйте, ${name}`)
    }
    else {
        let guest = 'гость'
        console.log(`Здравствуйте, ${guest}`)
    }
}
greeting()
greeting(name)*/



//5.Реализуйте функцию, которая рекурсивно выводит n-е число в последовательности Фибоначчи.
/*
let number=144
function fibonacсi(number,x=-1,y=1){
    let i=x+y
    console.log(i)
    if(i==number){
        return
    }
fibonacсi(number,x=y,y=i)

}
fibonacсi(number)*/


//6.Перепишите реализацию функции из упражнения 5 с помощью циклов
//Цикл for
/*let number=144
function fibonacci(number){

    for(let x=-1,y=1,i=0;i<number;x=y,y=i){
        i=x+y
        console.log(i)
    }
}
fibonacci(number)*/

//Цикл While
/*
let number=144
function fibonacci(number){
    let i=0
    let x=-1
    let y=1
    while (i<number){
        i=x+y
        console.log(i)
        x=y
        y=i
    }
}
fibonacci(number)*/


//Цикл do...while
/*
let number=144
function fibonacci(number){
    let i=0
    let x=-1
    let y=1
    do{
        i=x+y
        console.log(i)
        x=y
        y=i
    }
    while(i<number)
}
fibonacci(number)*/
