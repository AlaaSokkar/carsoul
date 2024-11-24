var img=Array.from(document.querySelectorAll(".img"));
var displayImg=document.getElementById("display");
var closeIcon=document.getElementById("close");
var BigImage=document.getElementById("BigImage");
var left=document.getElementById("left")
var right=document.getElementById("right");
var imgSur=document.getElementById("imgSur")
var currentIndex;


for(var i=0;i<img.length;i++){
    
    img[i].addEventListener("click",function(eventInfo){
        var imgNow=eventInfo.target.getAttribute("src");//masar e sora ely dagat alyha
        BigImage.setAttribute("src",imgNow); //
      
        displayImg.style.cssText="opacity:1";
    
      displayImg.classList.remove("d-none");
        displayImg.classList.add("d-flex");
       currentIndex=img.indexOf(eventInfo.target);
     
      
        console.log(  img.indexOf(eventInfo.target));
      
   
    })
   
}
function next(){
    currentIndex++;
    if(currentIndex==6){
        currentIndex=0;
    }

    var nextImage= img[currentIndex].getAttribute("src");//masar el sora ely gaya
   
   
    BigImage.setAttribute("src",nextImage);
   

}

right.addEventListener("click",next)
function prev(){
    if(currentIndex==0){
        currentIndex=6;
    }
    currentIndex--;
  
   

    var nextImage= img[currentIndex].getAttribute("src");//masar el sora ely gaya
   
   
    BigImage.setAttribute("src",nextImage);
   

}


left.addEventListener("click",prev)



closeIcon.addEventListener("click",function(){
  
    displayImg.classList.add("d-none");
})
//use slide by keyboard
document.addEventListener("keydown",function(e){
    console.log(e.key);
    if(e.key=="ArrowRight"){
        next();
    }
    if(e.key=="ArrowLeft"){
        prev();
    }
    if(e.key=="Escape"){
        displayImg.classList.add("d-none");
    }

})
//close when click in any space out img
displayImg.addEventListener("click",function(e){
    displayImg.classList.add("d-none");
   
   
})
imgSur.addEventListener("click",function(e){
   
   
    e.stopPropagation();
   
})