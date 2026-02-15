function orderFoode(callbacks){
   console.log("ordering food ...");
   setTimeout(function(){
      console.log("Food is ready!");
      callbacks();

   },3000);
}
function eatFood(){
   console.log("Eating food...");
}
orderFoode(eatFood);