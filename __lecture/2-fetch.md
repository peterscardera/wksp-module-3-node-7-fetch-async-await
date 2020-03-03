# 3.7.2 - fetch()

---
//FRONT END IS FETCH*** TO GET STUFF FROM SOMEWHERE OR POST

- `fetch()` is a JavaScript (but not in NodeJS) Promise-based function.
- It's mainly used to
    - `GET` from somewhere
    - `POST` data somewhere

The syntax is very similar to Promises.***

---
//we use fetch to go to the server so the sever can use await and a promise to get data from an api or database 
### `GET`

```js //end point
    .then(res => { // the data the server sends back
        // if response is successful
            // do something.
        // else
            // do something else.
        // you can return something to another .then, or not...
    })
    .then()
    .catch() // you can also catch errors!
```

---

### `POST
THIS IS HOW WE SEND IT BACK TO THE SERVER!!!!!!
```js
fetch('<URL>',{
        method: 'POST', // (optional) for `GET`
        mode: '',       // (optional) no-cors, *cors, same-origin
        cache: '',      // (optional) no-cache, reload, force-cache, only-if-cached
        credentials: '',// (optional) include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json' // (optional) but we'll use it.
            // (optional) other options / parameters that can be set here.
            },
        body: JSON.stringify({ // good practice to stringify, even if not always required.
            // the data that you want to send to the server.
        })
    })
    .then(res => {
        // do stuff
    });
```

---

[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## Now on to [Insomnia](https://insomnia.rest/download/)

[Getting started](https://support.insomnia.rest/category/9-getting-started)

---