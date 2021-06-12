import { register } from "../../model/user.js";

const $template = document.createElement("template");
$template.innerHTML = `
<form class="register-form">
  <h2 class="title">Tạo tài khoản</h2>
  <div class="sub-title">Xin chào</div>
  <input-wrapper class="name" placeholder="Nhập tên" type="text" error=""></input-wrapper>
  <input-wrapper class="email" placeholder="Nhập email" type="email" error=""></input-wrapper>
  <input-wrapper class="password" placeholder="Nhập mật khẩu" type="password" error=""></input-wrapper>
  <input-wrapper class="password-confirmation" placeholder="Nhập lại mất khẩu" type="password" error=""></input-wrapper>
  <button class="register-btn">Đăng ký</button>
</form>
`;

export default class RegisterForm extends HTMLElement {
	constructor() {
		super();
		this.appendChild($template.content.cloneNode(true));

		this.$registerform = this.querySelector(".register-form");
		this.$name = this.querySelector(".name");
		this.$email = this.querySelector(".email");
		this.$password = this.querySelector(".password");
		this.$passwordConfirmation = this.querySelector(".password-confirmation");
	}

	connectedCallback() {
		this.$registerform.onsubmit = (event) => {
			event.preventDefault();
			console.log("Register form submitted");

			let isPassed =
				this.$name.validate((value) => {
					return value != "";
				}, "Không được bỏ trống tên") &
				this.$email.validate((value) => {
					return value != "";
				}, "Không được bỏ trống email") &
				this.$password.validate((value) => {
					return value != "";
				}, "Không được bỏ trống password") &
				(this.$passwordConfirmation.validate((value) => {
					return value != "";
				}, "Không được bỏ trống xác nhận mật khẩu") &&
					this.$passwordConfirmation.validate((value) => {
						return value == this.$password.value;
					}, "Mật khẩu xác nhận không đúng"));

			let data = {
				name: this.$name.value,
				email: this.$email.value,
				password: this.$password.value,
			};

			if (isPassed) {
				register(data.name, data.email, data.password);
			}
		};
	}
}

window.customElements.define("register-form", RegisterForm);
