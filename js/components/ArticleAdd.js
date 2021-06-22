const $template = document.createElement("template");
$template.innerHTML = `
<div class = "add">
<form action="./index.html" class = "form-add">
    <label class="Label">Your id:</label><br />
    <input class="id" placeholder="Your id" /><br />
    <label class="Label">Your date:</label><br />
    <input class="date" placeholder="Your date" /><br />
    <label class="Label">Your image:</label><br />
    <input class="image" placeholder="Your image" /><br />
    <label class="Label">Your title:</label><br />
    <input class="title" placeholder="Your title" /><br />
    <label class="Label">Your comment:</label><br />
    <input class="comment" placeholder="Your comment" /><br />
    <br /><br /><br />
   
    <label class="Label">Your content:</label><br />
    <input class="content" placeholder="Your content" /><br />

    <input type="submit" value="Thêm" />
    </form>


</div>
`;
export default class ArticleAdd extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$formAdd = this.querySelector(".form-add");
    this.$id = this.querySelector(".id");
    this.$date = this.querySelector(".date");
    this.$image = this.querySelector(".image");
    this.$title = this.querySelector(".title");
    this.$comment = this.querySelector(".comment");
    // this.$author = this.querySelector(".author");
    this.$content = this.querySelector(".content");
  }
  connectedCallback() {
    this.$formAdd.onsubmit = (event) => {
      console.log("Thêm thành công");
      event.preventDefault();
      let a = {
        id: this.$id.value,
        date: this.$date.value,
        image: this.$image.value,
        title: this.$title.value,
        comment: this.$comment.value,
        author: firebase.auth().currentUser.displayName,
        content: this.$content.value,
      };
      console.log(a);
      if (a != null) {
        firebase.firestore().collection("articles").add({
          id: this.$id.value,
          date: this.$date.value,
          comment: this.$comment.value,
          image: this.$image.value,
          title: this.$title.value,
        });
        firebase.firestore().collection("article-id").add({
          id: this.$id.value,
          date: this.$date.value,
          comment: this.$comment.value,
          image: this.$image.value,
          title: this.$title.value,
          author: firebase.auth().currentUser.displayName,
          content: this.$content.value,
        });
      }
    };
  }
}
window.customElements.define("article-add", ArticleAdd);
