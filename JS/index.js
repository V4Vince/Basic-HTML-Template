
document.addEventListener("DOMContentLoaded", function(event) {
  //Add event listenrs here
});

//Handles sidenav clicks
//Displays element with ID matching contentID into content-portal div
displayContent = (contentID) => {
  let selectedContent = document.getElementById(contentID).innerHTML;
  let contentPortal = document.getElementById("content-portal");
  return contentPortal.firstElementChild.innerHTML = selectedContent;
}
