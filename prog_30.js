let n = 28;
let tem = n;

if (tem <= 1) {
    console.log(`${n} is not a perfect number.`);
}

let sum = 1; 

for (let i = 2; i <= Math.sqrt(tem); i++) {
    if (tem % i === 0) {
        sum += i;
        if (i !== tem / i) {
            sum += tem / i;
        }
    }
}

if (sum === tem) {
    console.log(`${n} is a Perfect number.`);
} else {
    console.log(`${n} is not a Perfect number.`);
}
