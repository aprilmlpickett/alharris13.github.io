/*document.write("I love writing JavaScript, and using external files!");*/

/*window.alert("This is an alert");*/

/*function show_message_1() {
  window.alert("This is alert #1!");
}
function show_message_2(){
  window.alert("This is alert #2");
}

show_message_2();
show_message_1();*/

/*function update_alert(){
  window.alert("Welcome! This site is updated daily!");
}

function section_alert() {
  window.alert ("Please visit the picture section!");
}

function links_alert(){
  window.alert ("Also, check out my links page!");
}

function get_messages(){
  update_alert();
  section_alert();
  links_alert();
}
get_messages();*/


/*function car_cost(mycar, paycheck){
  window.alert("You have a " + mycar + " and make $" + paycheck);
}

function get_added_text(){
  var textpart1= "This project ";
  var textpart2= "is almost fun!";
  var addedtext= textpart1 + textpart2;
  return addedtext;
}

car_cost("Mustang", 1500);

var alerttext = get_added_text();
  window.alert (alerttext);*/

function display_HTML(){
  let myheading  = "<h1>Hello, World!</h1>";
  let mytext= '<p>While it is nice to know you world, there are only some things that I am comfortable sharing in a global context. You can’t alter the variable that holds this text outside of the block that contains it! Ha!</p>';
  

document.write(myheading + mytext);
}
display_HTML(); 
/*remember to place the command inside the curly brackets, the callback goes outside the brackets*/

