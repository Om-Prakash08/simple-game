var randomNumber2;
var randomNumber1;
function changeImage1(){
randomNumber1=Math.floor(Math.random()*6)+1 ;
switch(randomNumber1)
{
  case 1:
   document.querySelector(".img1").setAttribute("src" ,"dice1.png" );
   break ;
   case 2:
    document.querySelector(".img1").setAttribute("src" ,"dice2.png" );
    break ;
    case 3:
     document.querySelector(".img1").setAttribute("src" ,"dice3.png" );
     break ;
     case 4:
      document.querySelector(".img1").setAttribute("src" ,"dice4.png" );
      break ;
      case 5:
       document.querySelector(".img1").setAttribute("src" ,"dice5.png" );
       break ;
       case 6:
        document.querySelector(".img1").setAttribute("src" ,"dice6.png" );
        break ;
}}
function changeImage2(){
 randomNumber2=Math.floor(Math.random()*6)+1 ;
switch(randomNumber2)
{
  case 1:
   document.querySelector(".img2").setAttribute("src" ,"dice1.png" );
   break ;
   case 2:
    document.querySelector(".img2").setAttribute("src" ,"dice2.png" );
    break ;
    case 3:
     document.querySelector(".img2").setAttribute("src" ,"dice3.png" );
     break ;
     case 4:
      document.querySelector(".img2").setAttribute("src" ,"dice4.png" );
      break ;
      case 5:
       document.querySelector(".img2").setAttribute("src" ,"dice5.png" );
       break ;
       case 6:
        document.querySelector(".img2").setAttribute("src" ,"dice6.png" );
        break ;

}
//function changeImage(){
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
}
function changeImage(){
  document.querySelector("h1").innerHTML = "Dice Roll Game";
  document.querySelector(".img1").setAttribute("src" ,"Dice1.jpeg" );
  document.querySelector(".img2").setAttribute("src" ,"Dice2.jpeg" );
}
