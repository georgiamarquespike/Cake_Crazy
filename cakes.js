
let recipe = document.getElementsByClassName("recipes");
let recipes = [...recipe];



$(document).ready(()=>{
   $("#search-button").on("click", ()=>{

let name = document.getElementsByClassName("name");
let names = [...name]; // works as expected


let cakeValues = $("#cake").val(); //works as expected 

    for (let d = 0; d < names.length; d ++){
       let nameID = names[d].id;
     if (nameID != cakeValues){
         names[d].style.display ="none";
     }else {
     names[d].style.display ="grid";
     } 
     if (cakeValues === "All"){
         names[d].style.display ="grid";
     }
 }
 function stop(){
     for (let e = 0; e <recipes.length; e++){
        recipes[e].style.display ="none";
     }


 }
 stop()
   })


 $(".exit_button").on("click", ()=>{
     console.log("hi")
     $(".recipes").hide()

 })

 });





let cakeImage = document.getElementsByClassName("view-recipe");
let cakeImages = [...cakeImage];


for (var a= 0; a < cakeImages.length; a++){
    cakeImages[a].addEventListener("click", function(){
        console.log(cakeImages[a])
        for (let  b=0; b < recipes.length; b++){
            let cakeArray =[];
            cakeArray.push(this).id;
            let c = cakeArray[0].id;
            console.log(c)
            let recipesArray = recipes[b].id;
console.log(recipesArray);
            function stop(){
                if (recipesArray !=c){
                    recipes[b].style.display ="none";
                    
                }
}

             if (recipesArray === c){
                 recipes[b].style.display ="block";
                 recipes[b].style.zIndex ="3";
                 
                 recipes[b].style.opactity ="1"

                 
             }
             stop()
           
         
        }
       
    })
}