//Chapter 1

//1.Увеличьте значение переменной a инициализированной 0 в цикле до 10 (на 1
// каждую итерацию). Выполните задание трижды используя циклы while (...) { *…*
// }, do { *...* } while(...), for (...) { *...* } соответственно
/*
let a=0
while(a<11)
{
    console.log(a)
    a++
}
a=0
do{
    console.log(a)
    a++
}
while(a<11)
a=0
for(a;a<11;a++)
{
    console.log(a)
}*/



//2.Написать цикл, которой будет продолжать итерации пока пользователь не
// введёт строку “Завершить”. Для ввода используйте функцию prompt.
/*let count='Завершить'
for(let i=0,a=1;i<a;i++) {
    let input = prompt('Введи команду')
    if (count != input) {
        a++
    }
}*/



//3.С помощью цикла for выведите все нечётные числа в интервале от 0 до 20
/*for(let i=0;i<20;i++){
    if(i%2){
        console.log(i)
    }
}*/



//4.Перепишите код из упражнения 1.1.10 таким образом, чтобы вместо группы
// условных инструкций использовался switch
/*const  a = 201;
switch (a % 2){
case 'Нечетное':
    alert('a нечётное')
default:
    alert('a чётное')
}*/


//5.Поменяйте две переменные местами (это можно сделать воспользовавшись
// дополнительной переменной)
/*
let a=5
let b=10
console.log(`a=${a}`)
console.log(`b=${b}`)
let c= a
a=b
b=c
console.log(`a=${a}`)
console.log(`b=${b}`)*/


//6.Преобразуйте число 143.2343 к строке с точностью до 2 знака после запятой
/*let value=143.2343
let a=value.toFixed(2)
console.log(a)*/



//7.Округлите число 42.2654 до 1 знака после запятой
/*let value=42.2654
let a=value.toFixed(1)
console.log(a)*/



//8.Найдите индекс первого вхождения строки “JavaScript” в строку “I learn JavaScript”
/*
let value='I learn JavaScript'
for(let i=0;i<value.length;i++){
    if(value[i]=='J')
        console.log(i)
*/



//9.Реализуйте функцию, которая возвращает функцию, выводящую количество
// собственных вызовов
/*function foo()
{
    function foo2()
    {
        let a = 0
        a++
        console.log(a)

}
return foo2()
}
foo()*/


//10.Функция squarePow принимает 2 параметра: число и анонимную функцию,
// которая возводит число в квадрат. Возведите число в 4-тую степень с помощью
// squarePow.
/*let value=3
function foo(val){
    return val=val*val
}
function squarePow(value,fooo)
{
  let result= fooo(value)*fooo(value)
    console.log(result)
}
squarePow(value,foo)*/



//Chapter 2

//1.Создайте объект вида { a: ‘a’, b: ‘b’, c: ‘c’ }. Выведите на экран значение в поле a
// двумя способами: через квадратные скобки и как свойство объекта
/*let obj={a:'a', b: 'b', c: 'c'}
alert(obj.a)
alert(obj['a'])*/


//2.Создайте объект вида { a: 2, b: “Coding” }. Создайте копию этого объекта посредством
// Метода Object.assign,
// Spread-оператора
// Выводите результаты в консоль
/*let obj={a:2,b:'Coding'}
console.log({obj})
let clone=Object.assign(obj)
console.log({clone,})
let obj2={a:2,b:'Coding'}
console.log({obj2})
let clone2= {...obj2}
console.log({clone2})*/


//3.Создайте объект вида { a: 4 }. Добавьте ему поле b содержащее число 5 и
// удалите поле a. На каждом этапе проверяйте наличие полей в объекте.
// Результаты выводите в консоль
/*
let obj={a:4}
console.log({obj})
obj.b=5
console.log({obj})
delete obj.a
console.log({obj})*/


//4.Создайте пустой объект и добавьте ему поля name и lastName со значениями
// “Иван” и “Иванов” соответственно. Также добавьте поле salary и запишите туда
// любое число. Переберите свойства объекта и выведите их в консоль с
// помощью цикла for (... in …).
/*let obj={}
obj.name='Иван'
obj.lastname='Иванов'
obj.salary=7
for (let key in obj){
    console.log(`Ключ: ${key}   значение:  ${obj[key]}`)
}*/


//5.Создайте массив чисел от 0 до 10 и выведите его в консоль двумя разными
// способами: посредством цикла for..in и цикла for..of
/*let arr=[]
for(let i=0;i<11;i++){
    arr[i]=i
}
for(let i in arr){
    console.log(arr[i])
}
for(let i of arr){
    console.log(arr[i])
}*/


//6.Реализуйте функцию-конструктор, создающую объект Animal с полями name и kind
/*function User(name){
    this.name=name
    this.kind=true
}
let user=new User('Animal')
console.log(user)*/


//7.Реализуйте функцию сортирующую символы в строке и возвращающую отсортированную строку.
/*let str='Hello World'
console.log(str)
function sorts(str){
    let arr=[]
    let t
    for(let i=0;i<str.length;i++)
        arr[i]=str[i]
    for(let a=1;a<str.length;a++){
        for(let b=str.length-1;b>=a;b--){
            let c=arr[b-1]
            let d=arr[b]
            if(c.charCodeAt(0)>d.charCodeAt(0))
            {
                t=arr[b-1]
                arr[b-1]=arr[b]
                arr[b]=t
            }
        }

    }
    str=arr.join('')
    return str
}
let result=sorts(str)
console.log(result)*/


//8.Реализуйте функцию, которая сортирует передаваемый в неё массив чисел
/*let arr=[]
for(let i=0;i<10;i++) {
let a=Math.round(Math.random()*100)
    arr[i]=a
}
console.log(arr)
function sorts(arr){
    let t
    for(let a=1;a<arr.length;a++){
        for(let b=arr.length-1;b>=a;b--){
            if(arr[b-1]>arr[b])
            {
                t=arr[b-1]
                arr[b-1]=arr[b]
                arr[b]=t
            }
        }

    }
    return arr
}
let result=sorts(arr)
console.log(result)*/


//9.Реализуйте функцию, которая находит и возвращает индекс элемента в массиве
/*let arr=[]
let str='Hello World'
for(let i=0;i<str.length;i++)
    arr[i]=str[i]
console.log(arr)
let simb='W'
function find(arr,simb){
    let arr2=[]
    let a=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==simb){
            arr2[a]=i
            a++
        }
    }
return arr2
}
let result=find(arr,simb)
console.log(result)*/


//10.Создайте двумерный массив чисел, заполните его случайными числами от 0 до
// 10 и выведите его в консоль в виде таблицы
/*let arr=[]
for(let a=0;a<5;a++)
{
    arr[a]=[]
for(let i=0;i<5;i++)
{
    arr[a][i] = Math.round(Math.random() * 10)
}
}
for(let i=0;i<5;i++){
    console.log(`${i} ${arr[i]}`)
}*/


//11.Создайте двумерный массив с двумя ключами: en и ru. Пусть первый массив
// содержит названия месяцев на английском, а второй - на русском. Напишите
// функцию, которая по языку и числу месяца возвращает его название
/*let arr=[
    ['en','January','February','March','April',
    'May','June','July','August','September',
    'October','November','December'],
['ru','Январь','Февраль','Март','Апрель',
        'Май','Июнь','Июль','Август',
        'Сентябрь','Октябрь','Ноябрь','Декабрь']
]
console.log(arr)
let language='ru'
let month=1
function returns(arr,language,month){
    if(language=='ru'){
        return arr[1][month]
    }
    if(language=='en'){
        return arr[0][month]
    }
}
let returning=returns(arr,language,month)
console.log(returning)*/


//12.Реализуйте функцию, которая позволяет полностью клонировать объект
/*let obj={
    name:'Ivan',
    surname:'Petrov'
}
console.log(obj)
function foo(obj){
    let clone={}
    for(let key in obj){
        clone[key]=obj[key]
    }
    return clone
}
let clone=foo(obj)
console.log(clone)*/



//13.Напишите функцию в одну строчку, которая вычисляет сумму всех чисел в массиве
/*let arr=[1,2,3,4,5]
let summ=(arr)=>{let a=0;for(let i=0;i<6;i++){a+=i};return a}
let result=summ(arr)
console.log(result)*/


//14.Реализуйте функцию, которая создаёт новый объект с заданным набором полей
// и с другим объектом в качестве прототипа
/*let people={
    vid:'gomosapiens'
}
console.log(people)
function foo(obj){
    let object={
        name:'Ivan',
        surname:'Petrov'
    }
    object.__proto__= obj
    return object
}
let result=foo(people)
console.log(result.vid)*/


//15.Реализуйте функцию, которая объединяет все массивы, являющиеся частью
// другого массива в один массив
/*let arr=['a','b','c']
let arr2=['d','e','f']
console.log(arr)
console.log(arr2)
function foo(arr,arr2){
    let sum=[]
    for(let i=0;i<arr.length;i++)
    sum[i]=arr[i]
    for(let i=arr.length, a=0;i<arr.length+arr2.length;i++,a++)
        sum[i]=arr2[a]
    return sum

}
let result=foo(arr,arr2)
console.log(result)*/


//16.Что вернут следующие выражения:
// a. [] + []
// b. [10] + [1]
// c. [] - []
// d. +[]
// e. +{}
// f. {} + {}
// g. {} - {}
// h. !{}
// i. [] == []
// j. {} === {}
//Проверьте свои догадки
/*let a=[]+[]
console.log({a})
let b=[10]+[1]
console.log({b})
let c=[]-[]
console.log({c})
let d=+[]
console.log({d})
let e=+{}
console.log({e})
let f={}+{}
console.log({f})
let g={}-{}
console.log({g})
let h=!{}
console.log({h})
let i=[]==[]
console.log({i})
let j=[]===[]
console.log({j})*/


//17.Используя деструктурирующее присваивание создать на основе объекта {
// firstName: “Иван”, lastName: “Иванов”,  years: 25 } переменные с названиями
// name и age, в который записать данные из полей firstName и years
/*
let obj={
    firstName:'Ivan',
    lastName:'Ivanov',
    years:25
}
console.log(obj)
let {firstName:name,years:age}=obj
console.log(name)
console.log(age)*/


//18.Создайте массив со списком строк “Понедельник”, “Вторник”, ”Среда”. С
// помощью деструктурирующего присваивания вынесите эти названия в
// отдельные переменные
/*let arr=['Понедельник','Вторник','Среда']
let[monday,tuesday,wednesday]=arr
console.log(monday)
console.log(tuesday)
console.log(wednesday)*/


//19.Поменяйте две переменные с помощью деструктуризации массивов
/*let variable='Привет'
let vars='Андрей'
console.log(variable,vars)
let arr=['Hello','World']
let[variable2,vars2]=arr
console.log(variable2,vars2)*/


//20.Отсортируйте массив чисел по возрастанию используя метод sort
/*let arr=[]
for(let i=0;i<10;i++){
    arr[i]=Math.round(Math.random()*100)
}
console.log(arr)
function foo(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr.sort(foo)
console.log(arr)*/


//21.Напишите функцию добавления в массив нового элемента по индексу предыдущего элемента.
/*
let arr=[]
for(let i=0;i<10;i++){
    arr[i]=Math.round(Math.random()*100)
}
console.log(arr)
let element='Добавка'
function  foo(arr,element)
{
    arr[arr.length]=element
}
foo(arr,element)
console.log(arr)*/


//22.Напишите функции, реализующие поверхностное клонирование массива и объекта
/*let arr=['a','b','c']
console.log(arr)
function fooArr(arr)
{
    let clone=Array.from(arr)
    return clone
}
let cloneArr=fooArr(arr)
console.log(cloneArr)

let obj={
    name:'Ivan',
    surname:'Petrov'
}
console.log(obj)
function fooObj(obj){
    let clones=Object.assign(obj)
    return clones
}
let cloneObj=fooObj(obj)
console.log(cloneObj)*/


//23.Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
/*let arr=['a', 'b', 'c']
let arr2=[1, 2, 3]
let arr3 = arr.concat(arr2)
console.log(arr3)*/

