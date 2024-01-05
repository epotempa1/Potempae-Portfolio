
//Modal for the domain model photo--------------------------------------------//
var modal = document.getElementById("domain-modal");
var img = document.getElementById("domain-image");
var modalImg = document.getElementById("domain-modal-img");
var captionText = document.getElementById("domain-caption");


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var exit = document.getElementsByClassName("close")[0];
exit.onclick = function(){
modal.style.display = "none";
}

var modal = document.getElementById("domain-modal");

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

//Modal for user journey image-------------------------------------------------------------// 
var modal = document.getElementById("user-journey-modal");
var img = document.getElementById("user-journey-image");
var modalImg = document.getElementById("user-journey-modal-img");
var captionText = document.getElementById("user-journey-caption");


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var exit = document.getElementsByClassName("close-uj")[0];
exit.onclick = function(){
modal.style.display = "none";
}

var modal = document.getElementById("user-journey-modal");

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

//Modal for the sitemap image------------------------//
var modal = document.getElementById("sitemap-modal");
var img = document.getElementById("sitemap-image");
var modalImg = document.getElementById("sitemap-modal-img");
var captionText = document.getElementById("sitemap-caption");


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var exit = document.getElementsByClassName("close-sm")[0];
exit.onclick = function(){
modal.style.display = "none";
}

var modal = document.getElementById("sitemap-modal");

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });