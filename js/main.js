import ArticleContainer from "./components/ArticleContainer.js";
import ArticleList from "./components/AritcleList.js";
import InputWrapper from "./components/InputWrapper.js";
import RegisterForm from "./components/RegisterForm.js";
import LogInForm from "./components/LogInForm.js";
import data from "./dataIndex.js";
import ArticlePreview from "./components/ArticlePreview.js";

let $articleList = document.getElementById("blog-list");
$articleList.setAttribute("articles", JSON.stringify(data));

//////////////////////////////////////////
// HEADER
let $toggle = document.querySelector("#header .toggle-button");
let $collapse = document.querySelectorAll("#header .collapse");

$toggle.addEventListener("click", function () {
  $collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
});
