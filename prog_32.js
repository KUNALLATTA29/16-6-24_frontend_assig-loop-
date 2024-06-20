const n = 145;
let tem = n;
let sum = 0;

while (tem > 0) {
    let d = tem % 10;
    let fact = 1;
    for (let i = 1; i <= d; i++) {
        fact *= i;
    }
    
    sum += fact;
    tem = Math.floor(tem / 10);
}

if (sum === n) {
    console.log(`${n} is a strong number.`);
} else {
    console.log(`${n} is not a strong number.`);
}
