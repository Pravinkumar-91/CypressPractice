'use strict'
let details = new Map([[2,'koki'],[1,'pravin'],[3,'sasti'],[4,'ruku']])
details.set(5,'dhoni')
/*
for(let [key,value] of details){
   console.log(key, value )
}
for(let serial of details.keys()){
console.log(serial);
}
let value = details.get(1)
console.log(value)

if(details.values('koki')){
    console.log('key exist')
} else if(console.log('not present'));

for(let all of details.entries()){
    console.log(all)
}*/

let segricate = [...details.entries()].sort((a,b)=>a[1]-b[1])
let sortedMap = new Map(segricate)
for(let all of sortedMap.entries()){
    console.log(all)
}
