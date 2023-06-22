document.addEventListener("DOMContentLoaded", function() {
    var headings = [
      "Heading 1",
      "Heading 2",
      "Heading 3",
      "Heading 4",
      "Heading 5"
    ];
  
    var headingsElement = document.getElementById("headings");
    var ulElement = document.createElement("ul");
  
    headings.forEach(function(heading) {
      var liElement = document.createElement("li");
      liElement.textContent = heading;
      ulElement.appendChild(liElement);
    });
  
    headingsElement.appendChild(ulElement);
  });
  