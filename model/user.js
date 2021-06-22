export async function register(name, email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName: name,
    });
    console.log(firebase.auth().currentUser);
    alert("Đăng ký thành công");
  } catch (error) {
    alert(error.message);
  }
}
export async function login(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert("Đăng nhập thành công");
    // console.log(firebase.auth().currentUser);
  } catch (error) {
    alert(error.message);
  }
}
export function authStateChanged() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user == null) {
      document.getElementById("app").innerHTML = `<login-form></login-form>`;
    }
  });
}
