$(document).ready(function(){
    var mylist = document.getElementsByClassName("list");

    var toplist = document.getElementsByClassName("top-list");
   
    for(var i = 0; i < mylist.length ; i++){
       var span = document.createElement("SPAN");

      var  fav = document.createElement("i");
      fav.className = "fa fa-angle-down";

       //span.className = "close";

        span.appendChild(fav);
        mylist[i].appendChild(span);
       
    }

    for(var i = 0; i < toplist.length ; i++){
      var span = document.createElement("SPAN");

     var  fav = document.createElement("i");
     fav.className = "fa fa-angle-down";
     fav.style.color = "white";


      //span.className = "close";

       span.appendChild(fav);
       toplist[i].appendChild(span);
      
   }

   

   
  
   
    
     
   

   
   var coll = document.getElementsByClassName("list");
   var doc = document.getElementsByClassName("fa fa-angle-down");
   
    var i;



for (i = 0; i < coll.length; i++) {
   doc[i].addEventListener("click",function(){
       if(this.className === "fa fa-angle-down"){
           this.className = "fa fa-angle-up";
       }else{
           this.className = "fa fa-angle-down";
       }

   });

   

 coll[i].addEventListener("click", function() {
   
   
   this.classList.toggle("active");
   var content = this.nextElementSibling;
   if (content.style.display === "block") {
     content.style.display = "none";

   } else {
     content.style.display = "block";
    
     
    
   }  
 });
 
}




var counter = 0;


displayimg();


function displayimg(){
  var i;
  var blip = document.getElementsByClassName('myimg');
  for( i = 0 ; i < blip.length; i++){
    blip[i].style.display = "none";
  }
 
    counter++;
    if(counter > blip.length){
      counter = 1;
  
  }

 blip[counter-1].style.display = "block";

 setTimeout(displayimg, 2000)

}

});