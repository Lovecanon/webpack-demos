'use strict';

function f1(resolve, reject) {
  // resolve("success")
  reject(new Error("error!!!"))
}

var p1 = new Promise(f1);
p1.then(step1)
  .then(step2)
  .then(step3)
  .then(console.log, console.error)