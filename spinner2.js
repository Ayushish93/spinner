const arr = ['|','/','-','\\','|'];
let delay = 100;
for(let ele of arr) {
  delay += 200;
  setTimeout(() => {
    let ele2 = '\r' + ele;
    process.stdout.write(ele2); 
    }, delay);
  }