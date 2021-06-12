export async function register(name, email, password, errorCb) {
	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);
		await firebase.currentUser.updateProfile({
			displayName: name,
		});
	} catch (error) {
		alert(error.message);
	}
}

export async function login(name, email, password) {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		alert("Đăng nhập thành công");
	} catch (error) {
		alert(error.message);
	}
}
