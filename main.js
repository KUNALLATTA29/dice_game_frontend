

window.onload = () => {
  let num1 = Math.floor((Math.random()*6)+1); 
  let num2 = Math.floor((Math.random()*6)+1); 

  if(num1>num2){
    document.getElementById("result").innerText = "Player 1 Wins";
  }else if(num1<num2){
    document.getElementById("result").innerText = "Player 2 Wins";
  }else{
    document.getElementById("result").innerText = "Game is tie";
  }

  document.getElementById("img1").src = `./images/dice${num1}.png`;
  document.getElementById("img2").src = `./images/dice${num2}.png`;
}
