var reviews = [
{
  id:1,
  name: "mya jones",
  job: "ux designer",
  img:
    "http://yesofcorsa.com/wp-content/uploads/2019/10/Business-Woman-Wallpaper-High-Definition-1024x683.jpg",

  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing eli Dicta placeat fuga vero rerum ipsam. Quasi molestiae aperiam nostrum consequatur accusamus.",  
},
{
  id:2,
  name:"anna jonhson",
  job: "web designer",
  img: 
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  text:
  "Dolor sit amet. Consectetur adipisicing eli. Dicta placeat fuga vero rerum ipsam.Quasi molestiae aperiam nostrum. Consequatur accusamus providen.",
},
{
  id:3,
  name:"jessica peters",
  job: "web designer",
  img: 
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  text:
  "Dicta placeat fuga vero rerum ipsam.Quasi molestiae aperiam nostrum consequatur accusamus provident autem explicabo magnam dolore laudantium.",

},
{
  id:4,
  name:"don lane",
  job: "ux designer",
  img: 
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  text:
  "Quasi molestiae aperiam nostrum consequatur accusamus provident est illum corrupti numquam autem explicabo magnam dolore laudantium.",
},
];

// select items

var img=document.getElementById("person-img");
var author=document.getElementById("author");
var job=document.getElementById("job");
var info=document.getElementById("info");

var prevBtn = document.querySelector(".prev-btn") 
var nextBtn = document.querySelector(".next-btn") 
var randomBtn = document.querySelector(".random-btn") 

// set starting item

let currentReview =0;


//load initial item
window.addEventListener("DOMContentLoaded",function(){
  showPerson()
  
}); 

//show person based on item

function showPerson() {
  var item= reviews[currentReview];
  img.src=item.img;
  author.textContent = item.name;
  job.textContent =item.job;
  info.textContent= item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
  currentReview++;
  if(currentReview > reviews.length -1){
    currentReview =0;
  }
  showPerson();
});

//show previous person
prevBtn.addEventListener("click", function(){
  currentReview--;
  if(currentReview <0) {
    currentReview = reviews.length -1;
  }
  showPerson();
});

//show random person
randomBtn.addEventListener("click", function(){
  currentReview = Math.floor(Math.random() * reviews.length)
  showPerson();
});
