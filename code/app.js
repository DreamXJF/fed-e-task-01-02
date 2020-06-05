/**
 * 注意：下面2个const 定义 重复fp，
 *       所以测试代码题1，注释代码题2；测试代码题2，注释代码题1；
 */

/**
 * 代码题1：基于下面代码完成下面的四个练习
 */
const fp = require('lodash/fp')

// 数据
//horsepower 马力， dollar_value 价格  in_stock 库存
const cars = [
  {
    name:'Ferrari FF',horsepower: 660, dollar_value:700000,in_stock:true
  },
  {
    name:'Spyker C12 Zagato',horsepower: 650, dollar_value:648000,in_stock:false
  },
  {
    name:'Jaguar XKR-S',horsepower: 550, dollar_value:132000,in_stock:false
  },
  {
    name:'Audi R8',horsepower: 525, dollar_value:114200,in_stock:false
  },
  {
    name:'Aston Martin One-77',horsepower: 750, dollar_value:1850000,in_stock:true
  },
  {
    name:'Pagani Huayra',horsepower: 700, dollar_value:1300000,in_stock:false
  },
]


//  第一题
let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
console.log(isLastInStock(cars));


//第二题 使用  fp.flowRight(), fp.prop(), fp.first() 获取第一个car的name
let isFirstInName = fp.flowRight(fp.prop('name'),fp.first)
console.log(isFirstInName(cars));


// 第三题
let _average = function (xs) {
  return fp.reduce(fp.add, 0, xs)/xs.length
}
let averageDollarValue = function (cars) {
  let getValue = function (car) {
    return car.dollar_value
  }
  return fp.flowRight(_average,fp.map(getValue))(cars)
}
console.log(averageDollarValue(cars));


//第四题
let _underscore = fp.replace(/\W+/g,'_')
function sanitizeNames(cars){
  let getName = function (car) {
    return car.name
  }
  let fn = fp.map(fp.flowRight(_underscore,fp.toLower,getName))
  return fn(cars)
}
console.log(sanitizeNames(cars));

/**
 * 代码题2：基于下面提供的代码完成后续的四个练习
 */
// const fp = require('lodash/fp')
// const {Maybe, Container} = require('./support')


// // 第一题
// let maybe = Maybe.of([5, 6, 1])
// let ex1 = function (n) {
//  return maybe.map( x => {
//     return fp.map(item => {
//       return fp.add(item,n)
//     },x)
//   })
// }


// //  第二题
// let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
// let ex2 = function () {
//   return xs.map(x => {
//     return fp.first(x)
//   })
// }


// // 第三题
// let safeProp = fp.curry(function (x, o){
//   return Maybe.of(o[x])
// })
// let user = {id:2, name:"Albert"}
// let ex3 = function (x,o) {
//   return safeProp(x,o).map(x => {
//     return fp.first(x)
//   })
// }

// // 第四题
// let ex4 = function (n) {
//   return Maybe.of(n).map(x => {
//     return parseInt(x)
//   })
// }