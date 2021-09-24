var sum = 0;
var count= 0;

function add(x){
  sum = sum + x;
 count = count + 1;
  print();
}


function print()
{

document.getElementById("output").innerHTML = "<hr> <br> <center> The Sum Is: " + sum + "<br> <center> Click Count: "  + count;

}

function cle()
{
  sum = 0;
  count = 0;
 document.getElementById('output').innerHTML= " ";
}
