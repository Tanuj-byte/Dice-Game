
var x = Math.floor(Math.random() * 6)+1;

var y = Math.floor(Math.random()*6)+1;
var newsrc1 = "images/dice"+x+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",newsrc1);
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src","images/dice"+y+".png");


if (x>y) {
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (x<y) {
document.querySelector("h1").innerHTML="Player 2 Wins";

}
else {
document.querySelector("h1").innerHTML="Draw";
}
