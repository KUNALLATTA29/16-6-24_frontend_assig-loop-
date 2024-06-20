let a=33729568344;
let s=a.toString()
let fre ={}
for(let ele of s){
  if(fre[ele]){
    fre[ele]++
  }else{
    fre[ele]=1
  }
}
console.log(fre)