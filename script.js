'use strict';

console.log('app is running');

function getName(){
  let name = prompt('What is your name?');
  console.log(name);
  while(name === null || name === ''){
    alert('Please provide a name!');
    name =prompt('What is your name?');
  }

  function firstQ() {
    let answer = prompt('Was I born in America?');
    while(answer === null || answer === ''){
      alert('Please enter yes or no!');
      answer = prompt('Was I born in America?');
    }
    answer = answer.toLowerCase();
    switch(answer){
    case 'no':
    //   console.log('Correct');
      alert('Correct! I was born in Japan!');
      break;
    case 'yes':
      alert('Wrong. I was born in Japan.');
      break;
    default:
      alert('Yes or no please!');
      firstQ();
    }
  }

  function secondQ() {
    let answer = prompt('Am I Japanese?');
    while(answer === null || answer === ''){
      alert('Please enter yes or no!');
      answer = prompt('Am I Japanese?');
    }
    answer = answer.toLowerCase();
    switch(answer){
    case 'yes':
      alert('Wrong. Im Filipino.');
      break;
    case 'no':
    //   console.log('Correct');
      alert('Correct. Im Filipino.');
      break;
    default:
      alert('Yes or No please!');
      secondQ();
    }
  }

  function thirdQ() {
    let answer = prompt('Is sushi my favorite food?');
    while(answer === null || answer === ''){
      alert('Please enter yes or no!');
      answer = prompt('Is sushi my favorite food?');
    }
    answer = answer.toLowerCase();
    switch(answer){
    case 'no':
      alert('Wrong. Anything shellfish or sushi related will inhaled by me.');
      break;
    case 'yes':
    //   console.log('Correct');
      alert('Correct! Anything shellfish or sushi will be inhaled by me!');
      break;
    default:
      alert('Yes or No please!');
      thirdQ();
    }
  }

  function fourthQ() {
    let answer = prompt('Did I graduate highschool in 2015?');
    while(answer === null || answer === ''){
      alert('Please enter yes or no!');
      answer = prompt('Did I graduate highschool in 2015?');
    }
    answer = answer.toLowerCase();
    switch(answer){
    case 'no':
      alert('Wrong. I graduated highscool in 2015.');
      break;
    case 'yes':
    //   console.log('Correct');
      alert('Correct. I graduated highschool in 2015.');
      break;
    default:
      alert('Yes or No please!');
      fourthQ();
    }
  }

  function fifthQ() {
    let answer = prompt('Is my favorite anime Attack on Titan?');
    while(answer === null || answer === ''){
      alert('Please enter yes or no!');
      answer = prompt('Is my favorite anime Attack on Titan?');
    }
    answer = answer.toLowerCase();
    switch(answer){
    case 'no':
    //   console.log('Correct');
      alert('Correct! Attack on Titan is amazing, but Full Metal Alchemnist is my all time favorite anime.');
      break;
    case 'yes':
      alert('Wrong! Attack on Titan is amazing, but Full Metal Alchemnist is my all time favorite anime.');
      break;
    default:
      alert('Yes or No please!');
      fifthQ();
    }
  }

  firstQ(), secondQ(), thirdQ(), fourthQ(), fifthQ();

  alert('Welcome ' + name + '!');

}
