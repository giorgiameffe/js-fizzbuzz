
// apertura del ciclo for 

for (let i = 1; i <= 100; i++) {

    // istruzioni condizionali

    if (i % 3 === 0 && i % 5 === 0) {

        let word = 'FizzBuzz';
        console.log(word);
    
    } else if (i % 3 === 0) {

        word = 'Fizz'; 
        console.log(word);

    } else if (i % 5 === 0) {
        
        word = 'Buzz';
        console.log(word);

    } else {
        
        console.log(i)
    }
}