var play1=Math.random();
play1=play1*6;
play1=Math.floor(play1)+1;

var play2=Math.random();
play2=play2*6;
play2=Math.floor(play2)+1;

var dice1="images/dice";
var dice2="images/dice";
dice1=dice1.concat(play1);
dice1=dice1.concat(".png");
dice2=dice2.concat(play2);
dice2=dice2.concat(".png");

document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);


if(play1>play2){
    document.querySelector("h1").innerHTML="Player 1 wins ";
}
else if(play1===play2){
    document.querySelector("h1").innerHTML="It's A tie ";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins ";
}




