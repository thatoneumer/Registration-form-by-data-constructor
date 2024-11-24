// getting ids.
var userName = document.getElementById("username");
var userPassword = document.getElementById("password");
var userEmail = document.getElementById("email");
var userGender = document.getElementsByName("gender");
var userCity = document.getElementById("userCity");

function Dataconstructor(name, password, email, gender, city) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.gender = gender;
  this.city = city;
}

function usergenderChecker() {
  for (var i = 0; i < userGender.length; i++) {
    if (userGender[i].checked == true) {
      return userGender[i].value;
    }
  }
}

function userCitychecker() {
  if (userCity.selectedIndex === 0) {
    alert("Please Select City");
  }
  return userCity.value;
}

function submitData(e) {
  e.preventDefault();
  const userData = new Dataconstructor(
    userName.value,
    userPassword.value,
    userEmail.value,
    usergenderChecker(),
    userCitychecker()
  );

  console.table(userData);
}

function unValid(uname) {
  if (uname.target.value.length < 5) {
    uname.target.nextElementSibling.innerText = "atleast 5 char required";
    uname.target.nextElementSibling.style.display = "block";
    return;
  }

  uname.target.nextElementSibling.style.display = "none";
}

function upValid(upw) {
  if (upw.target.value.length < 8) {
    upw.target.nextElementSibling.innerText = "Atleast 8 char required";
    upw.target.nextElementSibling.style.display = "block";
    return;
  }

  upw.target.nextElementSibling.style.display = "none";
}

function ueValid(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.target.value)) {
    mail.target.nextElementSibling.style.display = "none";
    return;
  } else {
    mail.target.nextElementSibling.style.display = "block";
    mail.target.nextElementSibling.innerText = "Invalid Email Address";
  }
}
