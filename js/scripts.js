// GENERATE TERMS
//
// d3.csv("/data/terms.csv", function(data) {
//
//   var columns = ["Category", "Term", "Definition"];
//
//   var list = d3.select("#list");
//
//   var divs = list.selectAll("div")
//       .data(data)
//       .enter()
//       .append("div")
//       .attr("class", function(d) {
//         var c = d["Category"];
//         c = c.toLowerCase();
//         if (c == "gender expression") {
//           c = "expression"
//         }
//         var re = /^(\w+)/;
//         c = c.match(re)[0].toString();
//         return "term " + c;
//       });
//
//   var terms = divs.append("dt")
//       .text(function(d) {
//         return d["Term"];
//       });
//
//   var definitions = divs.append("dd")
//       .text(function(d) {
//         return d["Definition"];
//       });
//
// });

window.onload = function() {
  var categories = document.getElementById("legend").getElementsByTagName("input");
  var terms = document.getElementsByClassName("term");
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].type == "checkbox") {
      categories[i].onclick = function() {
        var category = this.classList[1];
        console.log(category);
        for (var j = 0; j < terms.length; j++) {
          if (terms[j].classList.contains(category)) {
            if (this.checked) {
              terms[j].style.display = "block";
            } else {
              terms[j].style.display = "none";
            }
          }
        }
      };
    }
  };
};