// JS REGISTER
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase, ref, set, push, get, child, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries
// import swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3PF8MwePw6mftAms_S9CDjnYBZeIKdHw",
  authDomain: "projek-akhir-acce3.firebaseapp.com",
  databaseURL: "https://projek-akhir-acce3-default-rtdb.firebaseio.com",
  projectId: "projek-akhir-acce3",
  storageBucket: "projek-akhir-acce3.appspot.com",
  messagingSenderId: "989360353462",
  appId: "1:989360353462:web:868bac6967d90048d37617",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const database = getDatabase(app); // LOGIN

// ---------------------- The References LOGIN----------------

const usernameLog = document.getElementById("userInplog");
const passLog = document.getElementById("passInplog");
const submitLog = document.getElementById("sub_btnlog");

// ---------------------- The References REGIS------------------------
const username = document.getElementById("userInpreg");
// const nim = document.getElementById("nimInp");
const name = document.getElementById("nameInpreg");
const noHP = document.getElementById("noHPInpreg");
// const email = document.getElementById('emailInp');
const pass = document.getElementById("passInpreg");
const submit = document.getElementById("sub_btnreg");

var btnRegis = document.getElementById("show-regis");
var btnLogin = document.getElementById("show-login");
var btnLogout = document.getElementById("out");
var loginN = localStorage.getItem("username");
// var loginN = sessionStorage.getItem("username");

function cekLogin() {
  if (loginN != null) {
    btnLogin.style.display = "none";
    btnRegis.style.display = "none";
    btnLogout.style.display = "block";
  } else {
    btnLogout.style.display = "none";
    btnLogin.style.display = "block";
    btnRegis.style.display = "block";
  }
}

var Out = document.getElementById("out");

Out.onclick = function logOut() {
  localStorage.removeItem("username");
  // sessionStorage.removeItem("username");
  var loginN = localStorage.getItem("username");
  // var loginN = sessionStorage.getItem("username");

  function cekLogin() {
    if (loginN != null) {
      btnLogin.style.display = "none";
      btnRegis.style.display = "none";
      btnLogout.style.display = "block";
    } else {
      btnLogout.style.display = "none";
      btnLogin.style.display = "block";
      btnRegis.style.display = "block";
    }
  }
  cekLogin();
  console.log(loginN);
};

cekLogin();
// ---------------------- Autentikasi LOGIN Pengguna------------------------
function authenticateUser() {
  const databaseRef = ref(database);

  get(child(databaseRef, "UserList/" + usernameLog.value.replace(/\./g, ","))).then((snapshot) => {
    if (snapshot.exists()) {
      let databasePass = snapshot.val().password;
      let databaseUser = snapshot.val().username;

      if (databasePass === passLog.value) {
        signin();
        sessionStorage.setItem("username", databaseUser);
        sessionStorage.setItem("password", databasePass);

        localStorage.setItem("username", databaseUser);
        localStorage.setItem("password", databasePass);

        login(snapshot.val());
      } else {
        showErrorPopup("Nama Pengguna atau Password yang anda masukan salah.");
      }
    }
  });
}
// ----------------------- Login Pengguna --------------------------------
function login(user) {
  let keepLoggedIn = document.getElementById("customSwitch1").checked;

  if (!keepLoggedIn) {
    sessionStorage.setItem("user", user);
    window.location = "index.html";
    // closeBtnRegLog();
  } else {
    showSuccessPopup();
    localStorage.setItem("keepLoggedIn", "yes");
    localStorage.setItem("username", usernameLog.value.replace(/\./g, ","));
    localStorage.setItem("password", passLog.value);
    window.location = "index.html";
    // closeBtnRegLog();
  }
}
// Funcition untuk mengecek kosong atau tidaknya form regis
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

// Function validasi inputan
function Validation() {
  let usernameregex = /^[a-zA-Z0-9]+@(gmail|outline|outlook)\.com$/;
  let nameregex = /^[a-zA-Z\s]+$/;
  let noHPregex = /^[a-zA-Z0-9]+$/;
  let passregex = /^[a-zA-Z0-9]{6,}$/;

  if (isEmptyOrSpaces(username.value) || isEmptyOrSpaces(name.value) || isEmptyOrSpaces(noHP.value) || isEmptyOrSpaces(pass.value)) {
    showWarningPopup("Kolom tidak boleh dibiarkan kosong.");
    return false;
  }
  if (!usernameregex.test(username.value)) {
    showWarningPopup("Masukkan email yang valid");
    return false;
  }
  if (!nameregex.test(name.value)) {
    showWarningPopup("Nama hanya berupa huruf.");
    return false;
  }
  if (!passregex.test(pass.value)) {
    showWarningPopup("- Password hanya boleh huruf dan angka.\n- Password minimal 6 karakter\n- Password tidak boleh berisi karakter spasi.");
    return false;
  }
  return true;
}
// ---------------------REGISTER USER TO FIREBASE-------------------
function RegisterUser() {
  if (!Validation()) {
    return;
  }
  const dbRef = ref(db);

  get(child(dbRef, "UserList/" + username.value.replace(/\./g, ","))).then((snapshot) => {
    if (snapshot.exists()) {
      showWarningPopup("Akun Sudah Ada!");
    } else {
      set(ref(db, "UserList/" + username.value.replace(/\./g, ",")), {
        username: username.value.replace(/\./g, ","),
        fullname: name.value,
        phone: noHP.value,
        password: pass.value,
        login: "",
      })
        .then(() => {
          sessionStorage.setItem("username", username.value.replace(/\./g, ","));
          sessionStorage.setItem("password", pass.value);
          Swal.fire("Sukses!", "Akun telah ditambahkan", "success");
        })
        .catch((error) => {
          sessionStorage.setItem("username", username.value.replace(/\./g, ","));
          sessionStorage.setItem("password", pass.value);
          Swal.fire({
            icon: "error",
            title: "Maaf!",
            text: "Error" + error,
          });
        });
    }
  });
}

// Fungsi untuk menghilangakan button login regis
// function closeBtnRegLog() {
//   const loginButton = document.getElementById("sub_btnlog");
//   const headerRight = document.querySelector(".header-right-login");
//   loginButton.addEventListener("click", function () {
//     headerRight.style.display = "none";
//   });
// }
// Fungsi untuk menampilkan popup berhasil
function showSuccessPopup() {
  Swal.fire({
    title: "Berhasil!",
    text: "Anda berhasil masuk.",
    icon: "success",
    confirmButtonText: "OK",
  });
}
// Fungsi untuk menampilkan popup error
function showErrorPopup(errorMessage) {
  Swal.fire({
    title: "ERROR!",
    text: errorMessage,
    icon: "error",
    confirmButtonText: "OK",
  });
}
// Fungsi untuk menampilkan popup warning
function showWarningPopup(warningMessage) {
  Swal.fire({
    title: "Perhatian!",
    text: warningMessage,
    icon: "warning",
    confirmButtonText: "OK",
  });
}

// Fungsi untuk update login
function signin() {
  update(ref(database, "UserList/" + usernameLog.value.replace(/\./g, ",")), {
    login: +new Date(),
  })
    .then(() => {})
    .catch((error) => {
      alert("gagal");
    });
}

// Event Listener REGIS
submit.addEventListener("click", RegisterUser);
// Event Listener LOGIN
submitLog.addEventListener("click", authenticateUser);
