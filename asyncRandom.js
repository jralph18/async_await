function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let randInt = Math.floor(Math.random() * 101);
            if (randInt > 50){
                resolve(randInt);
            } else {
                reject(`${randInt} is too low!`);
            }
        }, 500);
    });
}

async function printRandomNumber() {
    try {
        let promise = await getRandomNumber();
        console.log(promise);
    } catch(err) {
        alert(err);
    }
}

printRandomNumber();

