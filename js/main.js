import ArticleContainer from "./components/ArticleContainer.js";
import ArticleList from "./components/ArticleList.js";
import InputWrapper from "./components/InputWrapper.js";
import RegisterForm from "./components/RegisterForm.js";
import LogInForm from "./components/LogInForm.js";
import data from "./dataIndex.js";
import ArticlePreview from "./components/ArticlePreview.js";
import ArticleAdd from "./components/ArticleAdd.js";

import { authStateChanged } from "../model/user.js";
import { getDataFromDocs } from "./utils.js";

authStateChanged();
//////////////////////////////////////////
// HEADER
let $toggle = document.querySelector("#header .toggle-button");
let $collapse = document.querySelectorAll("#header .collapse");

$toggle.addEventListener("click", function () {
  $collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
});

let response = await firebase.firestore().collection("articles").get();
let d = getDataFromDocs(response.docs);

let $articleList = document.getElementById("blog-list");
$articleList.setAttribute("articles", JSON.stringify(d));

let $button = document.getElementById("button");
$button.addEventListener("click", function () {
  document.getElementById("blog-list").innerHTML = "<article-add></article-add>";
  $button.style.display = "none";
});

let $out = document.querySelector(".out");

$out.addEventListener("click", function () {
  firebase.auth().signOut();
  alert("Đăng xuất thành công");
});
