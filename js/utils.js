document.getElementById("login-button").addEventListener("click", logowanie);

function logowanie() {
  var login = document.getElementById("login").value;
  var haslo = document.getElementById("haslo").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = this.responseText;
      if (response == "OK") {
        alert("Cześć " + login);
      } else {
        var modal = document.getElementById("login-modal");
        var message = document.getElementById("login-message");
        message.innerHTML = "Niepoprawny login lub hasło.";
        modal.style.display = "block";
      }
    }
  };
  xhttp.open("POST", "sprawdz_logowanie.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("login=" + login + "&haslo=" + haslo);
}