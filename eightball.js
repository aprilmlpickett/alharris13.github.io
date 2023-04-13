var fortunes = [
  "It is certain",
  "Try Again",
  "Yes",
  "Not likely",
  "Don't count on it",
  "Reply hazy, try again",
  "No",
  "Outlook not so good",
  "Very doubtful",
  "My reply is no",
  "Ask again later"

];

document.getElementById("response").innerHTML=fortunes;

function shake(){
  fortunes.sort(function(a,b){return 0.5 - Math.random()});
  document.getElementById("response").innerHTML=fortunes[0];
  document.getElementById("response").style.fontsize="18px";
  setTimeout(timeup, 4000);

  function timeup(){
    document.getElementById("response").innerHTML="Magic";
    document.getElementById("response").style.fontsize="120px";
    document.getElementById("clear").value="";
  }

}