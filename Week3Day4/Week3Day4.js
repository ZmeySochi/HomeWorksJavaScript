//1.Создайте объект вида { a: 1, b: 2, c: 3 }. Напишите функцию, которая выводит в
// консоль ключи и значения объекта в формате “${key - value}”
/*
let obj={ a: 1, b: 2, c: 3 }
console.log(obj)
function  foo(obj){
    for(let key in obj) {
        console.log('${'+`${key}`+'-'+`${obj[key]}`+'}')
    }
}
foo(obj)*/


//2.Реализуйте функцию, которая принимает объект и выводит на экран все собственные свойства объекта
/*
let obj={ a: 1, b: 2, c: 3 }
function  foo(obj){
    console.log(obj)
}
foo(obj)*/


//3.Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции
// эти массивы, а значениями - какие-нибудь строки.
/*let a=[]
let b=[]
let c=[]
let collMap=new Map()
collMap.set(a,'Hello-a')
collMap.set(b,'Hello-b')
collMap.set(c,'Hello-c')
console.log(collMap)*/


//4.Пусть дана коллекция Map. С помощью метода keys получите массив ее ключей
// и переберите его циклом for-of.

/*
let collMap=new Map([
    ['a', 'Hello-a'],
    ['b', 'Hello-b'],
    ['c', 'Hello-c']
]
)
console.log(collMap)
for (let keys of collMap.keys()) {
   console.log(keys)
}*/


//5.Создайте пустую коллекцию Set. С помощью метода add добавьте в нее
// элементы со значениями 1, 2 и 3.
/*
let collSet=new Set()
collSet.add(1)
collSet.add(2)
collSet.add(3)
console.log(collSet)*/


//6.Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода
// has проверьте наличие элемента со значением 3, а затем элемента со
// значением 4.
/*
let collectSet=new Set([1,2,3])
console.log(collectSet.has(3))
console.log(collectSet.has(4))*/


//7.Пусть дан массив. С помощью Set получите этот же массив, но без
// дублирующихся элементов
/*
let arr=[]
for(let i=0;i<10;i++)
    arr[i]=Math.floor(Math.random()*10)
console.log(arr)
let set=new Set(arr)
console.log(set)
let arr2=[]
let i=0
for (let value of set) {
    arr2[i] = value
    i++
}
console.log(arr2)*/


//8.Создайте объект Map в который запишите названия дней недели на русском
// языке в качестве значений и соответствующие им названия дней недели на
// английском в качестве ключей
/*let map=new Map([
    ['Monday','Понедельник'],
    ['Tuesday','Вторник'],
    ['Wednesday','Среда'],
    ['Tuesday','Четверг'],
    ['Friday','Пятница'],
    ['Saturday','Суббота'],
    ['Sunday','Воскресенье']
    ]
)
console.log(map)*/
