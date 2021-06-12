import { getArticleByID } from "../../model/article.js";

const $template = document.createElement("template");
$template.innerHTML = `
<section class="container">
<article id="post">
    <div class="headings text-center">
        <div class="category">
            <a href="#" class="nav-link">Travel</a>
        </div>

        <div class="title">
            <h2 class="text-title text-dark display-1">Đây là tiêu đề</h2>
        </div>

        <div class="meta">
            <a href="#" class="link display-2 text-secondary px-1"> <i class="fas fa-user text-primary"></i> <span class = "author">Nguyễn Đình Lộc</span> </a>
            <a href="#" class="link display-2 text-secondary px-1"> <i class="fas fa-clock text-primary"></i> <span class = "date">31/05/2021</span></a>
            <a href="#" class="link display-2 text-secondary px-1"> <i class="fas fa-comments text-primary"></i> <span class = "comment"></span></a>
        </div>
    </div>

    <div class="thumbnail mt-3">
        <img src="./assets/img1.jpg" class="thumbnail" alt="" />
    </div>

    <div class="content text-dark display-2 secondary-title mt-3">
        <p>
            1. Tháp Willis – Chicago <br />
            Vào năm 1969, nhà bán lẻ lớn nhất thế giới thời đó – Sears Roebuck and Company, đã nhận định họ rằng họ cần một không gian văn phòng cho khoảng 350.000 nhân viên trong công ty. Trong thời gian bốn năm, với nguồn nhân lực gồm 2000 công nhân, và số bê tông, vật liệu đủ để xây dựng một đường cao tốc có tám làn, dài năm dặm, thì cuối cùng tháp Sears 110 tầng đã được hoàn thành. (Năm 1988, Sears chuyển ra khỏi tòa nhà, 21 năm sau nó được đổi tên thành Willis Tower dựa theo tên của tập đoàn môi giới bảo hiểm toàn cầu Willis Group Holdings.) Một trong những chi tiết đáng nhớ nhất là hình ảnh 12.000 công nhân xây dựng, người bản địa tại Chicago và nhân viên tại Sears đã cùng nhau đặt thanh xà cuối cùng lên tòa nhà.
        </p>
        <p>
            2. Tòa nhà Chrysler – Thành phố New York <br />
            Chỉ 11 tháng sau khi đạt được danh hiệu tòa nhà cao nhất thế giới vào năm 1930, kỳ quan theo trường phái nghệ thuật Art Deco này đã bị qua mặt bởi tòa nhà Empire State – một ngọn tháp dài 18 mét được bổ sung vào những giây cuối cùng. Tuy nhiên, từ lâu nó đã được biết đến như một trong những tòa nhà có cấu trúc đẹp nhất thế giới. Khi ông trùm ô tô Walter P. Chrysler tiếp quản tài chính, ông đã cố gắng thêm sự quyến rũ cho khu vực phía Đông của New York. Thiết kế này đã mô tả phần đa chiều của các góc kính và một chiếc vương miện bằng thép không gỉ, nhưng ông vẫn yêu cầu bổ sung thêm các miệng máng xối khổng lồ được thiết kế giống như đồ trang trí mui xe trên xe hơi của mình.
        </p>
    </div>
</article>
</section>
`;
export default class ArticlePreview extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$title = this.querySelector(".text-title");
    this.$author = this.querySelector(".author");
    this.$date = this.querySelector(".date");
    this.$comment = this.querySelector(".comment");
    this.$image = this.querySelector("img.thumbnail");
    this.$content = this.querySelector(".content");
  }

  static get observedAttributes() {
    return ["article-id"];
  }

  async attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "article-id") {
      let data = await getArticleByID(newValue);
      if (!data) {
        return;
      } else {
        this.$title.innerHTML = data.title;
        this.$author.innerHTML = data.author;
        this.$date.innerHTML = data.date;
        this.$comment.innerHTML = data.comment;
        this.$image.setAttribute("src", data.image);
        this.$content.innerHTML = data.content;
      }
    }
  }
}
window.customElements.define("article-preview", ArticlePreview);
