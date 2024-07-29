function isPositive(num){
    return num>0;
}

console.log(isPositive(4));

function factorial(num){
    if(num==1)
    return 1
return num*factorial(num-1)
}
console.log(factorial(5))

const checkEven = function(num){
    return num%2==0
}
console.log(checkEven(4))

const arr = [2,4,6,8,10]
const sumOfArr = function(arr){
    let sum = 0
    for(let val of arr)
    sum +=val
return sum

}

function total(callback){
    console.log(callback)
    callback(4)
}
console.log(total(factorial))

function cts (name, callback){console.log('hello, ${name}')
callback() }


function tcs(){
    console.log('good boy')
}
cts('pravin', tcs)