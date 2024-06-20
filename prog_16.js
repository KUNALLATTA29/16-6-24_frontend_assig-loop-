let num=12321;
let tem =num.toString(); 
let rev=parseInt(num.toString().split('').reverse().join(''))

if(tem==rev){
  console.log("yes")
}else{
  console.log("no")
}