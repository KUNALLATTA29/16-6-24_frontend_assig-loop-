let n =5778
let s=n.toString()
let sum=1
for(let i of s){
  sum*=parseInt(i);
}
console.log(sum)