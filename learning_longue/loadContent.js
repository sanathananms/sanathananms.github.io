// Function to load header content from header.html
function loadHeader() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("header").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "learning_header.html", true); // Corrected path
  xhttp.send();
}

// Function to load footer content from footer.html
function loadFooter() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("footer").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "learning_footer.html", true); // Corrected path
  xhttp.send();
}

// Call the loadHeader and loadFooter functions when the page loads
window.onload = function () {
  loadHeader();
  loadFooter();
};
