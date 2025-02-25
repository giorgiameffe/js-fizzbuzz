
// apertura del ciclo for 

for (let i = 1; i <= 100; i++) {

    console.log(i);

    // istruzioni condizionali

    if (i % 3 === 0) {
        
        let word = 'Fizz';
        console.log(word);
    
    } else if (i % 5 === 0) {

        word = 'Buzz'; 
        console.log(word);

    } 
}