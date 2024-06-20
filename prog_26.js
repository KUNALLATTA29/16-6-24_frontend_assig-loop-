
let n = 30;
let sum = 0;

for (let i = 2; i <= n; i++) {
    let p = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            p = false;
            break;
        }
    }
    if (p) {
        sum += i;
    }
}

console.log(sum);
