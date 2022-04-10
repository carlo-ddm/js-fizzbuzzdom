console.log('test');

const container = document.querySelector ('.container');
const limit = 100;

for (let i = 1; i <= limit; i++) {
  const box = document.createElement ('div');
  box.className = 'box';
  box.classList.add ('blue');
  box.append(i);
  console.log(box);
  container.append(box);
  
  if (!(i % 3) && !(i % 5)){
    box.classList.add('fizz-buzz');
    box.innerHTML = 'FizzBuzz';
    console.log(box);
  } else if (!(i % 3)) {
    box.classList.add('fizz');
    box.innerHTML = 'Fizz';
    console.log(box);
  } else if (!(i % 5)){
    box.classList.add('buzz');
    box.innerHTML = 'Buzz';
    console.log(box);
  }
}

/**
 ERRORE--> importante scrivere prima la doppia condizione per poi sovrascrivere le condizioni specifiche.
 **/

// if(!(i % 3)){
//   box.classList.add('fizz');
//   box.innerHTML = 'Fizz';
//   console.log(box);
// } else if (!(i % 5)) {
//   box.classList.add('buzz');
//   box.innerHTML = 'Buzz';
//   console.log(box);
// } if (!(i % 3) && !(i % 5)){
//   box.classList.add('fizz-buzz');
//   box.innerHTML = 'FizzBuzz';
//   console.log(box);
// }
// }