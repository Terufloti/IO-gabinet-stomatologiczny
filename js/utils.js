function validateRegistrationForm() {
  var login = document.getElementById('login-register').value;
  var password = document.getElementById('inputPassword-register').value;
  var confirmPassword = document.getElementById('inputPassword-register2').value;
  var email = document.getElementById('email-register').value;
  var phone = document.getElementById('phone-register').value;
  var past_treatment = document.getElementById('past-treatment-registration').value;

  var isValid = true;

  if (!/^[A-Z][a-zA-Z]*$/.test(login)) {
    document.getElementById('login-register').classList.remove('is-valid');
    document.getElementById('login-register').classList.add('is-invalid');
    document.getElementById('validationServerUsernameFeedback-success').textContent = '';
    document.getElementById('validationServerUsernameFeedback-fail').textContent = 'Proszę podać poprawny login!';
    isValid = false;
  } else {
    document.getElementById('login-register').classList.remove('is-invalid');
    document.getElementById('login-register').classList.add('is-valid');
    document.getElementById('validationServerUsernameFeedback-fail').textContent = '';
    document.getElementById('validationServerUsernameFeedback-success').textContent = 'Wygląda OK!';
  }

  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(password)) {
    document.getElementById('inputPassword-register').classList.remove('is-valid');
    document.getElementById('inputPassword-register').classList.add('is-invalid');
    document.getElementById('validationServerPassword01Feedback-success').textContent = '';
    document.getElementById('validationServerPassword01Feedback-fail').textContent = 'Hasło niepoprawne!';
    isValid = false;
  } else {
    document.getElementById('inputPassword-register').classList.remove('is-invalid');
    document.getElementById('inputPassword-register').classList.add('is-valid');
    document.getElementById('validationServerPassword01Feedback-fail').textContent = '';
    document.getElementById('validationServerPassword01Feedback-success').textContent = 'Wygląda OK!';
  }

  if (confirmPassword !== password) {
    document.getElementById('inputPassword-register2').classList.remove('is-valid');
    document.getElementById('inputPassword-register2').classList.add('is-invalid');
    document.getElementById('validationServerPasswordFeedback-success').textContent = '';
    document.getElementById('validationServerPasswordFeedback-fail').textContent = 'Hasła do siebie nie pasują!';
    isValid = false;
  } else {
    if(confirmPassword !== '') {
      document.getElementById('inputPassword-register2').classList.remove('is-invalid');
      document.getElementById('inputPassword-register2').classList.add('is-valid');
      document.getElementById('validationServerPasswordFeedback-fail').textContent = '';
      document.getElementById('validationServerPasswordFeedback-success').textContent = 'Hasła pasują do siebie!';
    }
    else {
      document.getElementById('inputPassword-register2').classList.remove('is-valid');
      document.getElementById('inputPassword-register2').classList.add('is-invalid');
      document.getElementById('validationServerPasswordFeedback-success').textContent = '';
      document.getElementById('validationServerPasswordFeedback-fail').textContent = 'Hasło jest puste!';
    }
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('email-register').classList.add('is-invalid');
    document.getElementById('email-register').classList.remove('is-valid');
    document.getElementById('validationServerEmailFeedback-success').textContent = '';
    document.getElementById('validationServerEmailFeedback-fail').textContent = 'Proszę podać pooprawny email!';
    isValid = false;
  } else {
    document.getElementById('email-register').classList.remove('is-invalid');
    document.getElementById('email-register').classList.add('is-valid');
    document.getElementById('validationServerEmailFeedback-fail').textContent = '';
    document.getElementById('validationServerEmailFeedback-success').textContent = 'Wygląda OK!';
  }

  if (!/^(\+\d{1,3})?(\+48|\+\d{2})?\d{9}$/.test(phone)) {
    document.getElementById('phone-register').classList.remove('is-valid');
    document.getElementById('phone-register').classList.add('is-invalid');
    document.getElementById('validationServerPhoneFeedback-success').textContent = '';
    document.getElementById('validationServerPhoneFeedback-fail').textContent = 'Proszę podać poprawny numer telefonu!';
    isValid = false;
  } else {
    document.getElementById('phone-register').classList.remove('is-invalid');
    document.getElementById('phone-register').classList.add('is-valid');
    document.getElementById('validationServerPhoneFeedback-fail').textContent = '';
    document.getElementById('validationServerPhoneFeedback-success').textContent = 'Wygląda OK!';
  }

  return isValid;
}




function alertTriggering(message, isValid) {
  var alertPlaceholder = document.getElementById('alert-placeholder');
  var alertHTML='';

  if(isValid) {
    alertHTML = '<div class="alert alert-success" role="alert">' + message + '</div>';
  }
  else {
    alertHTML = '<div class="alert alert-danger" role="alert">' + message + '</div>'
  }
  alertPlaceholder.innerHTML = alertHTML
}

function validateLoginForm() {
  var login = document.getElementById('inputLogin-login').value;
  var password = document.getElementById('inputPassword-login').value;
  var isValid = true;

  if(login === "") {
    document.getElementById('inputLogin-login').classList.add('is-invalid');
    document.getElementById('inputLogin-login').classList.remove('is-valid');
    document.getElementById('validationServerLogin-LoginFeedback-fail').textContent = 'Podano pusty login!';
    document.getElementById('validationServerLogin-LoginFeedback-success').textContent = '';
    isValid = false;
  } 
  else {
    if(!/^[A-Z][a-zA-Z]*$/.test(login)) {
      document.getElementById('inputLogin-login').classList.add('is-invalid');
      document.getElementById('inputLogin-login').classList.remove('is-valid');
      document.getElementById('validationServerLogin-LoginFeedback-fail').textContent = 'Podano niepoprawny login (nie spełniono kryteriów z rejestracji)!';
      document.getElementById('validationServerLogin-LoginFeedback-success').textContent = '';
      isValid = false;
    }
    else {
      document.getElementById('inputLogin-login').classList.add('is-valid');
      document.getElementById('inputLogin-login').classList.remove('is-invalid');
      document.getElementById('validationServerLogin-LoginFeedback-fail').textContent = '';
      document.getElementById('validationServerLogin-LoginFeedback-success').textContent = 'Sprawdzamy to w bazie...';
    }
  }

  if(password === "") {
    document.getElementById('inputPassword-login').classList.add('is-invalid');
    document.getElementById('inputPassword-login').classList.remove('is-valid');
    document.getElementById('validationServerPassword-LoginFeedback-fail').textContent = 'Podano puste hasło!';
    document.getElementById('validationServerPassword-LoginFeedback-success').textContent = '';
    isValid = false;
  }
  else {
    if((!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(password))) {
      document.getElementById('inputPassword-login').classList.add('is-invalid');
      document.getElementById('inputPassword-login').classList.remove('is-valid');
      document.getElementById('validationServerPassword-LoginFeedback-fail').textContent = 'Podano niepoprawne hasło (nie spełniono kryteriów z rejestracji)!';
      document.getElementById('validationServerPassword-LoginFeedback-success').textContent = '';
      isValid = false;
    }
    else {
      document.getElementById('inputPassword-login').classList.add('is-valid');
      document.getElementById('inputPassword-login').classList.remove('is-invalid');
      document.getElementById('validationServerPassword-LoginFeedback-fail').textContent = '';
      document.getElementById('validationServerPassword-LoginFeedback-success').textContent = 'Sprawdzamy to w bazie...';
    }
  }

  if(isValid) {
    var formData = new FormData();
    formData.append('login-login', login);
    formData.append('haslo-login', password);
    fetch('php/login.php', {
      method: 'POST',
      body: formData
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      handleLoginResponse(data);
      location.reload();
    }).catch(function(error) {
      message = "Wystąpił błąd podczas logowania : " + error;
      loginAlertTriggering(message, false);
    });
  }

  return false;
}

function createCookie(name, value, days) {
  var expires ="";
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function createCredCookie(login, passwd, days) {
  var cred = login + "|" + passwd;
  createCookie("cred",cred,days);
}

function handleLoginResponse(response) {
  var feedbackLoginFail = document.getElementById('validationServerLogin-LoginFeedback-fail');
  var feedbackLoginSuccess = document.getElementById('validationServerLogin-LoginFeedback-success');
  var feedbackPasswordFail = document.getElementById('validationServerPassword-LoginFeedback-fail');
  var feedbackPasswordSuccess = document.getElementById('validationServerPassword-LoginFeedback-success');
  var feedbackLogin = document.getElementById('inputLogin-login');
  var feedbackPassword = document.getElementById('inputPassword-login');

  if (response.status === "success") {
    var login = document.getElementById('inputLogin-login').value;
    var password = document.getElementById('inputPassword-login').value;
    
    feedbackLoginFail.textContent = '';
    feedbackLoginSuccess.textContent = 'Wygląda OK!';
    feedbackLogin.classList.add('is-valid');
    feedbackLogin.classList.remove('is-invalid');
    feedbackPasswordFail.textContent = '';
    feedbackPasswordSuccess.textContent = 'Wygląda OK!';
    loginAlertTriggering('Logowanie zakończone sukcesem. Następuje przekierowanie...', true);

    createCredCookie(login, password, 30);
    setTimeout(function(){
      location.reload(); 
    },5000)
  }
  else if (response.status === "invalid_login") {
    feedbackLogin.classList.add('is-invalid');
    feedbackLogin.classList.remove('is-valid');
    feedbackLoginFail.textContent = 'Niepoprawny login!';
    feedbackLoginSuccess.textContent = '';
    feedbackPassword.classList.add('is-invalid');
    feedbackPassword.classList.remove('is-valid');
    feedbackPasswordFail.textContent = 'Niepoprawny login';
    feedbackPasswordSuccess.textContent = '';
  } 
  else if (response.status === "invalid_password") {
    feedbackPassword.classList.add('is-invalid');
    feedbackPassword.classList.remove('is-valid');
    feedbackPasswordFail.textContent = 'Niepoprawne hasło dla tego loginu!';
    feedbackPasswordSuccess.textContent = '';
    feedbackLoginFail.textContent ='';
    feedbackLoginSuccess.textContent = 'Wygląda OK!';
    feedbackLogin.classList.add('is-valid');
    feedbackLogin.classList.remove('is-invalid');
  }
}

function loginAlertTriggering(message, isValid) {
  var alertPlaceholder = document.getElementById('login-alert-placeholder');
  var alertHTML = '';
  if(isValid) {
    alertHTML = '<div class="alert alert-success" role="alert">' + message + '</div>';
  }
  else {
    alertHTML = '<div class="alert alert-danger" role="alert">' + message + '</div>';
  }
  alertPlaceholder.innerHTML = alertHTML;
}

function addHeaderWithName(name) {
  var section = document.getElementById('welcomeMessage');
  if(section) {
    var header = document.createElement('h1');
    header.textContent = "Witaj, " + name + "!";
    section.appendChild(header);
  }
}

function properCreateCalendar() {
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('mycalendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      allDaySlot: false,
      slotMinTime: '08:00',
      slotMaxTime: '21:00',
      slotDuration: '00:30:00',
      locale: 'pl',
      slotLabelFormat: {
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: false,
        meridiem: 'narrow'
      },
      events: [
      {
        title: 'Event 1',
        start: '2023-05-31T10:00:00',
        end: '2023-05-31T12:00:00'
      },
      {
        title: 'Event 2',
        start: '2023-06-02T14:00:00',
        end: '2023-06-02T16:00:00'
      }
      ]
  });

  calendar.render();
  });
}

function loggedCustomer(){
    var navLink = document.getElementById('nav-link-change');
    if(navLink){
      navLink.textContent = "Kalendarz"
    }

    var btnGroup = document.querySelector('.btn-group');
    if(btnGroup) {
      var logoutButton = document.createElement('button');
      logoutButton.type = 'button';
      logoutButton.classList.add('btn', 'btn-outline-danger');
      logoutButton.textContent = 'Wyloguj się';
      while (btnGroup.firstChild) {
        btnGroup.firstChild.remove();
      }
      btnGroup.appendChild(logoutButton);

      logoutButton.addEventListener('click', function() {
        document.cookie = 'cred=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        location.reload();
      });
    }
    var navList = document.querySelector('.navbar-nav');
    if(navList) {
      var newItem = document.createElement('li');
      newItem.classList.add('nav_item');
      var newLink = document.createElement('a');
      newLink.classList.add('nav-link');
      newLink.setAttribute('aria-current', 'page');
      newLink.href = '#';
      newLink.textContent = 'Zaproponuj spotkanie';
      newItem.appendChild(newLink);
    }
  }