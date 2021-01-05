const powerBallNumbers = () => {
    //create a list of numbers! 
    let numbers = [];
    //generate numbers
        //5 numbers and powerball 
    for(let i=0; i < 5; i++){
        numbers.push(Math.floor(Math.random() * 69) + 1 );
    }
    numbers.push(Math.floor(Math.random() * 26) + 1);
    console.log(numbers);
    //dispay the numbers
};
//4:24:29 4:24:59
const megaMillionsNumbers = () => {
    //create a list of numbers! 
    let numbers = [];
    //generate numbers
        //5 numbers and powerball 
    for(let i=0; i < 5; i++){
        numbers.push(Math.floor(Math.random() * 70) + 1 );
    }
    numbers.push(Math.floor(Math.random() * 25) + 1);
    console.log(numbers);
    //dispay the numbers
};
//4:29:59