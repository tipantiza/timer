let inputs = process.argv.slice(2);

const timer = (inputs) => {
  for (const input of inputs){
    const number = Number(input);
    if(!(number === NaN)){
      if (number >= 0){
        setTimeout(() => {
          process.stdout.write('\x07');
        }, input * 1000);
      }
    } 
  }
}

timer(inputs)