//1.Создайте переменную и выведите её на экран с помощью alert.
/*let var1=5
alert(var1)*/



//2.Запишите значение в переменную с помощью функции prompt и выведите её значение посредством alert
/*let var2=prompt('Как дела?')
alert(`У Вас ${var2} дела.`)*/



//3.Создайте переменные num и str инициализированные 3 и “” соответственно.
// Выведите приведённое к логическому типу значение этих переменных. Объясните результат.
/*let num=3
let str=""
console.log(!!num)
console.log(!!str)*/
//У num результат true потом что значение переменной не 0
// у str результат false потому что у строки отсутствуют символы



//4.Запросите у пользователя на вход два числа и выведите их сумму.
/*
let numberOne=prompt('Enter first number!')
let numberTwo=prompt('Enter second number!')
let sum=alert(`The sum of numbers is ${Number(numberOne)+Number(numberTwo)}`)*/



//5.Найдите остаток от деления введённых пользователем чисел a на b
/*
let numberOne=prompt('Enter first number!')
let numberTwo=prompt('Enter second number!')
let sum=alert(`The remainder of the division is equal to ${Number(numberOne)%Number(numberTwo)}`)*/



//6.Чем отличается постфиксная форма инкремента от префиксной? Поясните разницу примером в коде.
//Префиксная форма возвращает новое значение, в то время как постфиксная форма возвращает старое.
/*let counter=1
let prefix=++counter
alert(`Префикс ${prefix}`)
let counterTwo=1
let postfix=counterTwo++
alert(`Постфикс ${postfix}`)*/



//7.Напишите условие, которое проверяет что введённое пользователем число
// является чётным (условие чётности - деление числа на два без остатка).
/*
let inputCounter=prompt('Enter the number')
if (Number(inputCounter)%2)
{
    alert('Число не четное')
}
else{
    alert('Число четное')
}*/



//8.Сравните 1 и ‘1’  используя строгое и нестрогое сравнения. Сравните 0 и false
// используя строгое и нестрогое сравнения. Объясните результат.
/*let counterNumber=1
let counterChar='1'
if(counterNumber==counterChar)
    alert('1 и "1" Не строго равны')
else
    alert('1 и "1" Не строго не равны')
if(counterNumber===counterChar)
    alert('1 и "1" Строго равны')
else
    alert('1 и "1" Строго не равны')

let counterNull=1
let counterBull='1'
if(counterNull==counterBull)
    alert('0 и false Не строго равны')
else
    alert('0 и false Не строго не равны')
if(counterNull===counterBull)
    alert('0 и false Строго равны')
else
    alert('0 и false Строго не равны')*/
//Оператор == выполняет конвертирование(приведение к одному типу данных), а оператор === не конвертирует.



//9.Выведите в консоли тип следующих значений:
// a.11
// b.“Hello”
// c.{ a: 1 }
// d.null
// e.false
/*let a=11
let b="Hello"
let c={ a: 1 }
let d=null
let e=false
console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (e))*/



//10.Перепишите условие
// 	const  A = 201;
// 	if (A % 2) {
// 		alert(“A нечётное”);
// 	} else {
// 		alert(“A чётное”);
// 	}
/*const  A = 201
let result=(A%2)?alert('A нечётное'):alert('A чётное')*/



//11.Напишите с помощью логических операторов && и || выражение, которое
// проверяет введённый пользователем пароль и отображает в случае его
// правильности текст “Вы успешно вошли в систему”
//const password='1234'
//let input=prompt('Введите пароль')
//let result=!(password==input)||alert('Вы успешно вошли в систему')

//let result=(password==input)&&alert('Вы успешно вошли в систему')



//12.С помощью оператора отрицания преобразуйте переменную a = ‘30’ к
// логическому типу
/*let a='30'
console.log(!a)*/





