import { login } from "../../model/user.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <form class="wrap">
        <div class="form">
            <h2 class="heading">Sign In With</h2>
            <div class="input_form_group">
                <label class="input_label">Email</label>
                <input-wrapper class="email" placeholder="Your email" type="text" error=""></input-wrapper>
            </div>
            <div class="input_form_group">
                <label class="input_label">Password</label>
                <input-wrapper class="password" placeholder="Your password" type="password" error=""></input-wrapper>
            </div>
            <button class="signIn-btn">Sign in</button>
            <span class="mess_sign_up">Not a member? 
                <a href="" class="mess_link">Sign up now</a>
            </span>
        </div>
    </form>
`;

export default class LogInForm extends HTMLElement {
	constructor() {
		super();
		this.appendChild($template.content.cloneNode(true));

		this.$logInForm = this.querySelector(".wrap");
		this.$email = this.querySelector(".email");
		this.$password = this.querySelector(".password");
	}

	connectedCallback() {
		this.$logInForm.onsubmit = (event) => {
			event.preventDefault();
			console.log("Log in form submitted");
			let isPassed =
				this.$email.validate((value) => {
					return value != "";
				}, "Invalid email") &
				this.$password.validate((value) => {
					return value != "";
				}, "Invalid password");
			let data = {
				email: this.$email.value,
				password: this.$password.value,
			};

			if (isPassed) {
				login(data.email, data.password);
			}
		};
	}
}
window.customElements.define("login-form", LogInForm);
