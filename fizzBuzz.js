for(let i=0; i<=100 ; i++) {
  let fizz=((i % 3) ===0);
  let buzz=((i % 5) ===0);
  if (fizz && buzz) {
    console.log('FizzBuzz');
  } else if (fizz) {
    console.log('Fizz');
  } else if (buzz) {
    console.log('Buzz');
  } else {
let j;
    for(j=2; j<i;j++) {
      if (i % j===0) {
        console.log(i);
        break;
      }
    }
    if (j===i) {
      console.log('Prime ' + i);
    }
  }
};
