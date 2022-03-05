let cat = {
  "age": 4
}

try{
  alert("error catching started")
 
   if(cat.age > 40);{
     throw new SyntaxError("Cat age is not correct")
   }


} 
catch(e){
  alert(e)
}
finally{
  alert("error catching completed");
}
