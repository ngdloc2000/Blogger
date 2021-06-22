import ArticleContainer from "./ArticleContainer.js";

const $template = document.createElement("template");
$template.innerHTML = `
	<div class="article-list">

	</div>
`;

export default class ArticleList extends HTMLElement {
	constructor() {
		super();
		this.appendChild($template.content.cloneNode(true));
		this.$list = this.querySelector(".article-list");
	}

	static get observedAttributes() {
		return ["articles"];
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		if (attrName == "articles") {
			let data = JSON.parse(newValue);
			for (let articleData of data) {
				let $articleContainer = new ArticleContainer();
				$articleContainer.setAttribute("id", articleData.id);
				$articleContainer.setAttribute("image", articleData.image);
				$articleContainer.setAttribute("title", articleData.title);
				$articleContainer.setAttribute("date", articleData.date);
				$articleContainer.setAttribute("comment", articleData.comment);
				this.$list.appendChild($articleContainer);
			}
		}
	}
}
window.customElements.define("article-list", ArticleList);
