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

let checkboxes = document.getElementsByClassName("category");
var terms = document.getElementsByClassName("term");
for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", (e) => {
    let category = e.target.classList[1];
    for (let term of terms) {
      if (term.classList.contains(category)) {
        if (e.target.checked) {
          term.classList.remove("hidden");
        } else {
          term.classList.add("hidden");
        }
      }
    }
  });
};