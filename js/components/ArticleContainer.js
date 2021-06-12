const $template = document.createElement("template");
$template.innerHTML = `
	<div class="grid-item">
		<article class="article">
			<div class="card">
				<div class="overflow-img">
					<a href="#">
						<img src="" class="img-fluid article-image" alt="" />
					</a>
				</div>
			<div class="card-body text-center px-1">
					<a href="#" class="text-title display-1 text-dark article-title"> Đây là tiêu đề của blog </a>
					<p class="secondary-title text-secondary display-3">
						<span ><i class="far fa-clock text-primary article-date"></i> </span>
						<span ><i class="far fa-comments text-primary article-comment"></i> </span>
					</p>
				</div>
			</div>
		</article>
	</div>
`;

export default class ArticleContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$article = this.querySelector(".article");
    this.$image = this.querySelector(".article-image");
    this.$title = this.querySelector(".article-title");
    this.$date = this.querySelector(".article-date");
    this.$comment = this.querySelector(".article-comment");
  }

  static get observedAttributes() {
    return ["image", "title", "date", "comment"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "image") {
      this.$image.setAttribute("src", newValue);
    } else if (attrName == "title") {
      this.$title.innerHTML = newValue;
    } else if (attrName == "date") {
      this.$date.innerHTML = newValue;
    } else if (attrName == "comment") {
      this.$comment.innerHTML = newValue;
    }
  }
  connectedCallback() {
    this.$article.onclick = () => {
      console.log(this.id);
      window.location = "./article.html?articleId=" + this.id;
    };
  }
}
window.customElements.define("article-container", ArticleContainer);
