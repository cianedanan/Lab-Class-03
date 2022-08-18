'use strict';

console.log('app is running');

let score = 0;

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
      score = score + 1;
      break;
    case 'yes':
      alert('Incorrect, but nice try. I was born in Japan.');
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
      alert('Incorrect, but nice try. Im Filipino.');
      break;
    case 'no':
    //   console.log('Correct');
      alert('Correct! Im Filipino!');
      score = score + 1;
      break;
    default:
      alert('Yes or no please!');
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
      alert('Incorrect, but nice try. I would inhale anything sushi or shellfish related.');
      break;
    case 'yes':
    //   console.log('Correct');
      alert('Correct! I would inhale anything sushi or shellfish related!');
      score = score + 1;
      break;
    default:
      alert('Yes or no please!');
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
      alert('Incorrect, but nice try. I graduated highscool in 2015.');
      break;
    case 'yes':
    //   console.log('Correct');
      alert('Correct! I graduated highschool in 2015.');
      score = score + 1;
      break;
    default:
      alert('Yes or no please!');
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
      alert('Correct! Attack on Titan is amazing, but Full Metal Alchemist is my all time favorite anime.');
      score = score + 1;
      break;
    case 'yes':
      alert('Incorrect, but nice try! Attack on Titan is amazing, but Full Metal Alchemist is my all time favorite anime.');
      break;
    default:
      alert('Yes or no please!');
      fifthQ();
    }
  }

  firstQ(), secondQ(), thirdQ(), fourthQ(), fifthQ();
  alert('Welcome ' + name + '!');

}

function sixthQ(){
  let guess = null;
  let answer = Math.floor(Math.random( )* 10 + 1);
  for(let i = 1; i < 5;){
    guess = prompt('Guess a number between 1 and 10.');
    if(guess === null || guess === ''){
      alert('Please enter a number!');
    } else if(guess == answer){
      alert('Nice job! You guessed it!');
      score = score + 1;
      i += 5;
    } else if(i >= 4){
      alert('Out of guesses! The correct number is ' + answer + '.');
      i += 5;
    } else if(guess > 10 || guess <= 0){
      alert('Numbers from 1 to 10 please!');
    } else if(guess > answer){
      alert('Guess is too high! You have ' + (4 - i) + ' guesses left!');
      i++;
    } else if(guess < answer){
      alert('Guess is too low! You have ' + (4 - i) + ' guesses left!');
      i++;
    } else{
      alert('Numbers only please!');
    }
  }
}

function seventhQ(){
  let game = ['breath of the wild', 'stardew valley', 'it takes two', 'skyrim' , 'portal'];
  let guess = null;
  for(let i = 1; i < 7;){
    guess = prompt('Guess one of my top five video game titles.');
    while(guess === null || guess === ''){
      alert('Enter a game title please!');
      guess = prompt('Guess one of my top five video game titles.');
    }
    guess = guess.toLocaleLowerCase();
    if (guess === game[0] || guess === game[1] || guess === game[2] || guess === game[3] || guess === game[4] || guess === game[5]){
      alert('Correct!');
      score = score + 1;
      i += 7;
    } else{
      if(i < 6){
        alert('Good guess. Not in my top five though. You have ' + (6 - i) + ' guess(es) left!');
        i++;
      }else{
        alert('Oops! Out of guess attempts!');
        i++;
      }
    }
  }
  alert('Possible anwers: Breath of the Wild, Stardew Valley, It Takes Two, Skyrim, or Portal.');
  alert('You got ' + score + '/7 answers correct.');
}

