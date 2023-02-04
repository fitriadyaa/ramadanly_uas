var loginCred = [
  {
    username: "admin",
    password: "admin",
    name: "Administrator",
  },
  {
    username: "rifky",
    password: "rifky",
    name: "Rifky Abdul Hanan",
  },
];

function LogIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (i = 0; i < loginCred.length; i++) {
    if (
      username == loginCred[i].username &&
      password == loginCred[i].password
    ) {
      window.alert("Login Successfully. Welcome " + loginCred[i].name);
      window.open("dashboard.html", "_self");
      return;
    }
  }
  window.alert("Incorrect login credentials. Please try again.");
}

function register() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

  if (password != password2) {
    window.alert("Please check your confirmation password!");
  } else {
    loginCred.push({
      username: username,
      password: password,
      name: name,
    });
    window.alert("Successfully registered");
    window.open("login.html", "_self");
  }
}
