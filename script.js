'use strict';
// console.log(document.querySelector('.message').textContent);
let secnum=(Math.trunc(Math.random()*20))+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess)
    {
        document.querySelector('.message').textContent="No Number";
    }
    else if(guess===secnum)
    {
        document.querySelector('.message').textContent='Number Found';
        document.querySelector('.number').textContent=secnum;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score > highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess>secnum)
    { if(score>1)
      {  document.querySelector('.message').textContent='Too High!';
    score--;
    document.querySelector('.score').textContent=score;}
    else
    {
        document.querySelector('.message').textContent='You Lost The Game!';
        document.querySelector('.score').textContent=0;
    }
}
    else
    {if(score>1){ document.querySelector('.message').textContent='Too Low!'; score--;
    document.querySelector('.score').textContent=score;}
    else
    {
        document.querySelector('.message').textContent='You Lost The Game!';
        document.querySelector('.score').textContent=0;
    }
}

});
document.querySelector('.again').addEventListener('click',function(){
   score=20;
   secnum=(Math.trunc(Math.random()*20))+1;
   document.querySelector('.number').textContent='?';
   document.querySelector('.message').textContent='Start Guessing...';
   document.querySelector('.score').textContent=score;
   document.querySelector('.guess').value='';
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('number').style.width='15rem';
});
