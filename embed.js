document.addEventListener("DOMContentLoaded", function() {
    var data = {
      "001": [
        "Heading 1",
        "Heading 2",
        "Heading 3",
        "Heading 4",
        "Heading 5"
      ],
      "002": [
        "Title 6",
        "Title 7",
        "Title 8",
        "Title 9",
        "Title 10"
      ]
    };
  
    var elements = document.querySelectorAll('[data-id]');
  
    elements.forEach(function(element) {
      var dataId = element.getAttribute("data-id");
      var headings = data[dataId];
  
      if (headings) {
        var ulElement = document.createElement("ul");
  
        headings.forEach(function(heading) {
          var liElement = document.createElement("li");
          liElement.textContent = heading;
          ulElement.appendChild(liElement);
        });
  
        element.appendChild(ulElement);
      }
    });
  });
  