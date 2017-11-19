// GENERATE TERMS
//
// d3.csv("../terms.csv", function(data) {
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