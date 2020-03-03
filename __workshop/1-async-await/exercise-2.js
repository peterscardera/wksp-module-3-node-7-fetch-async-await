// Exercise 2
// ----------


/*
const doublesLater = async(num)  => {

const promise1 = await new Promise((resolve)=> {
    

        setTimeout(()=>{
            return num * 2
        })
    })
}
*/


doublesLater = (num) => {
    return new Promise(resolve => {
        
        setTimeout(() => {
            console.log(num)
             resolve(num * 2)
        }, 2000);
    })
}


const addPromise = async(num) => {

try{
    let firstNum = await doublesLater(10)
    let secondNum = await doublesLater(20)
    let thirdNum = await doublesLater(30)
    console.log(num+ firstNum+ secondNum+thirdNum)

}catch(err){
    console.log(err)
}
}

addPromise(10)

/*
function addPromise(num){
    return new Promise(resolve => {
        doubleAfter2Seconds(10)
            .then((a) => {
                doubleAfter2Seconds(20)
                    .then((b) => {
                        doubleAfter2Seconds(30).then((c) => {
                            resolve(x + a + b + c);
                        })
                })
        })
    });
}

*/