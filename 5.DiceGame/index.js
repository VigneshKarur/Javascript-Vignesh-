  var d1count=0;
  var d2count=0;
document.querySelector("button").addEventListener("click", function()
{
  var value= document.querySelector("button").innerHTML;
  press(value);
});
document.addEventListener("keypress", function(event){
  press(event.key);
  console.log(event)
});

function press(p)
{
  switch(p)
  {
    case "p":
  {
  var d1=Math.floor((Math.random()*6)+1);
  var d2=Math.floor((Math.random()*6)+1);
  if(d1==1)
  {
    document.querySelector(".img1").setAttribute("src","1.jpg");
  }
  else if(d1==2)
  {
    document.querySelector(".img1").setAttribute("src","2.jpg");
  }
  else if(d1==3)
  {
    document.querySelector(".img1").setAttribute("src","3.jpg");
  }
  else if(d1==4)
  {
     document.querySelector(".img1").setAttribute("src","4.jpg");
  }
  else if(d1==5)
  {
    document.querySelector(".img1").setAttribute("src","5.jpg");
  }
  else if(d1==6)
  {
    document.querySelector(".img1").setAttribute("src","6.jpg");
  }

  if(d2==1)
  {
    document.querySelector(".img2").setAttribute("src","1.jpg");
  }
  else if(d2==2)
  {
    document.querySelector(".img2").setAttribute("src","2.jpg");
  }
  else if(d2==3)
  {
    document.querySelector(".img2").setAttribute("src","3.jpg");
  }
  else if(d2==4)
  {
     document.querySelector(".img2").setAttribute("src","4.jpg");
  }
  else if(d2==5)
  {
    document.querySelector(".img2").setAttribute("src","5.jpg");
  }
  else if(d2==6)
  {
    document.querySelector(".img2").setAttribute("src","6.jpg");
  }
  if(d1>d2)
  {
    document.querySelector(".name").innerHTML="Player 1 wins";
    d1count++;
    document.querySelector(".c1").innerHTML="Player1:"+d1count;
     document.body.style.backgroundColor = "red";
     document.querySelector(".bd").innerHTML="Player1 wins";

  }
  else if(d2>d1)
  {
    document.querySelector(".name").innerHTML="Player 2 wins";
    d2count++;
    document.querySelector(".c2").innerHTML="Player2:"+d2count;
    document.body.style.backgroundColor = "green";
    document.querySelector(".bd").innerHTML="Player2 Wins";
  }
  else
  {
    document.querySelector(".name").innerHTML="Draw the match";
    document.body.style.backgroundColor = "yellow";
    document.querySelector(".bd").innerHTML="Tie";
  }
}
}
}
