function sort() {
   let value = document.getElementById("arr").value; 
   let split = value.split(",");
   let sort = split.sort(function (a, b) {
       return a - b
   } );
   document.getElementById("valueInput").innerHTML = sort;
   console.log(sort);
}