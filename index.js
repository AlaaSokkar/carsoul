var mainImage=document.getElementById("mainPhoto");
var sliderImages=document.querySelectorAll(".sliderPhotoes");


for(var i=0;i<sliderImages.length;i++){
    sliderImages[i].addEventListener("click",function(eventInfo){
        var appliedImage=eventInfo.target.getAttribute("src");
        mainImage.setAttribute("src",appliedImage)
        console.log()

        

    })
}
