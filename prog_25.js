let n = 20;

for (let i = 2; i <= n; i++) {
  let p = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      p = false;
      break;
    }
  }
  if (p) {
    console.log(i);
  }
}
