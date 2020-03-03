// nothing here yet...

const handleJokers= (event) => {

    event.preventDefault(); //stop the refresh

    const type = document.getElementById("type").value
    console.log("********", type)
    fetch("/jokes" ,{ //takes the path
        method: 'POST',
        headers: {
            'accept': 'application/json', // 
            'content-type': 'application/json' //what this function is send to u
            },
        body: JSON.stringify({type: type}) //we are assining the type to something named the same //data coming from form the type selected. EVERYTIME WE SEND TO BACKEND WE SHOULD STRINGIFY IT
    })
    .then(res => 
       //JSON.parse(res) no need . I DID IT in the exercise files!!!!
      //  console.log(res.json())
         res.json() //reads the response stream and wraps it in a promise takes just the body
        
     ) //parse the response from the serve
    .then(res => {
        console.log(res)
      let inputJoke = document.createElement("div");
        let body = document.querySelector("body");
        inputJoke.innerHTML = res.data
        body.appendChild(inputJoke)


      //check status if its 200 to doube check its ok
    })
}
