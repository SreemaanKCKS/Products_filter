function filterSelection(c) {
  clearAll()
  var x, i;
  x = document.getElementsByClassName("items");
    for (i = 0; i < x.length; i++) {

      if(c==="all"){
        x[i].style.display = "block";
        if(i!=x.length)
          continue;
        else
          break;
      }

      var cls = x[i].className.split(" ");

      if(c=="accessories" && c==cls[1]){
        x[i].style.display = "block"
      }

      else if(c=="groceries" && c==cls[1]){
        x[i].style.display = "block"
      }

      else if(c=="clothing" && c==cls[1]){
        x[i].style.display = "block"
      }
      else if(c=="below_avg" && c==cls[2]){
        x[i].style.display = "block"
      }
      else if(c=="average" && c==cls[2]){
        x[i].style.display = "block"
      }
      else if(c=="above_avg" && c==cls[2]){
        x[i].style.display = "block"
      }
      else if(c=="costly" && c==cls[2]){
        x[i].style.display = "block"
      }
    }
  }
  
function clearAll()
{
  x = document.getElementsByClassName("items");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"
    }
}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}