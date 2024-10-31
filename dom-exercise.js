// Exercise 1: get elements methods
var productsListElement = document.querySelector("div.products-list");

var firstProductElement = document.querySelector("div.product:first-child");

var buttonElements = document.querySelectorAll("button");

//Exercise 2: dom attributes
var addTitle = document.querySelector("h1");
addTitle.title = "F8 - Học lập trình để đi làm";
addTitle.setAttribute("data-title", "F8 - Học lập trình để đi làm");
var tagA = document.querySelector("a");
tagA.href = "https://fullstack.edu.vn/";
tagA.setAttribute("target", "_blank");

//Exercise 3: innertext
var changeHeading = document.querySelector("h1");
changeHeading.innerHTML = "F8 - Học lập trình để đi làm";

//Exercise 4: innerHTML 1
function render(html) {
  var addValue = document.querySelector("ul");
  addValue.innerHTML = html;
}
//Exercise 5: innerHTML 2
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

var render = function (courses) {
  var html = courses.map(function (course) {
    return `
            <li>${course}</li>
        `;
  });
  document.querySelector(".courses-list").innerHTML = html.join("");
};

render(courses);
//Exercise 6: dom CSS
var changeColorDiv = document.getElementsByClassName(".red");
changeColorDiv.style.backgroundColor = "#f00";
var changeColorP = document.querySelector("p");
changeColorP.style.color = "#f05123";

//Exercise 7: classlist 1
var addTitle = document.querySelector("h1");
addTitle.classList.add("title");
var replace = document.querySelector("p");
replace.classList.remove("sub-title");
replace.classList.add("content");

//Exercise 8: classlist 2
document.querySelectorAll("div").forEach((a) => a.classList.add("box"));

//Exercise 9: dom event
var changeColor = document.querySelector("button");
changeColor.onclick = function () {
  return (changeColor.style.color = "#fff");
};
