let num1 = 24;
let num2 = 36;
let hcf;

while (num1 !== num2) {
    if (num1 > num2) {
        num1 -= num2;
    } else {
        num2 -= num1;
    }
}
hcf = num1;

console.log(hcf);
