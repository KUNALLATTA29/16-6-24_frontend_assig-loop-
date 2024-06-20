let n = 153;
let s = n.toString();
let sum = 0;

for (let ele of s) {
    sum += Math.pow(parseInt(ele), s.length);
}

if (sum === n) {
    console.log(`${n} is an Armstrong number.`);
} else {
    console.log(`${n} is not an Armstrong number.`);
}
