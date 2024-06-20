const n = 1000;

for (let i = 1; i <= n; i++) {
    let s = i.toString();
    let sum = 0;

    for (let d of s) {
        sum += Math.pow(parseInt(d), s.length);
    }

    if (sum === i) {
        console.log(i);
    }
}
