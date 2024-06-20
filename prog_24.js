
let num = 2;
let p = true;

if (num <= 1) {
    p = false;
} else if (num > 1) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            p = false;
            break;
        }
    }
}

console.log(p);



