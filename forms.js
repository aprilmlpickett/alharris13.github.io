

/* correct answer to making email
function add(){
  var letter1= document.getElementById('first letter').value
  var letter2= document.getElementById('second letter').value

  var sum=
}*/

function makeEmail(){
  var firstName = document.getElementById("firstName").value,
      lastName = document.getElementById("lastName").value;

       var firstLetter = firstName.charAt(0);
        var email = firstLetter + "." + lastName +"@waketech.edu";
        alert(email);
}

