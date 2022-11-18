export const getRandomArbitrary = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
};

const scissors = 'scissors';
const paper = 'paper';
const rock = 'rock';
const win = 'win';
const lose = 'lose';
const draw = 'draw';


export const compareElements = (item1, item2) => {
  if (item1.value === item2.value){
    return draw;
  }
  if (item1.value === rock && item2.value === scissors){
    return win;
  }
  if (item1.value === rock && item2.value === paper){
    return lose;
  }
  if (item1.value === scissors && item2.value === paper){
    return win;
  }
  if (item1.value === scissors && item2.value === rock){
    return lose;
  }
  if (item1.value === paper && item2.value === scissors){
    return lose;
  }
  if (item1.value === paper && item2.value === rock){
    return win;
  }
};