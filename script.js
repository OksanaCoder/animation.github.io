var modal = document.getElementById('myModal');

var btn = document.querySelector(".button");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



$(".button").on("click", function() {
  $(this).addClass("shake");
  
  var delay = setTimeout(function(){
    $(".shake").removeClass("shake");
  }, 2000)
});
