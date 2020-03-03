# 3.7.0 - Review Promises

---

```js
const pauseFunction = () => {
    return new Promise(function(resolve, reject) {
        console.log('entering the promise(d) land');
        resolve('resolve'); // resolve is what sends the answer back to the promise
        console.log('...in limbo...');
        reject('reject'); //this one is never being hit/ "returned"
        console.log('shuffling off...');
    });
}


//to console log / use it :

pauseFunction().then(data=> {
    console.log(data)
})
```

---

Let's make it pause now...

```js
const pauseFunction = () => {
    return new Promise(function(resolve, reject) {
        console.log('entering the promise(d) land');
        resolve('resolve');
        console.log('...in limbo...');
        reject('reject');
        console.log('shuffling off...');
    });
}
```

---

<img src='./assets/promise.png' style='width:100%;' />

---

[Next lecture: Async / Await](../lecture-1-async-await)