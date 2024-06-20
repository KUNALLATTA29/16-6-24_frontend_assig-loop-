let n = 28;
let f = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    f.push(i);
  }
}
console.log(f);
