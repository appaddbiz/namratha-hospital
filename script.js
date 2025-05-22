// Get the popup
var popup = document.getElementById("popup");

// Get the <span> element that closes the popup
var closePopupBtn = document.getElementById("closePopupBtn");

// Display the popup when the page loads
window.onload = function () {
  popup.style.display = "block";
};

// When the user clicks on <span> (x), close the popup
closePopupBtn.onclick = function () {
  popup.style.display = "none";
};

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// Add an event listener to the close button
closePopupBtn.addEventListener('click', function() {
    // Pause the video when the popup is closed
    popupVideo.pause();

    // Optionally, hide the popup if needed
    document.getElementById('popup').style.display = 'none';
});