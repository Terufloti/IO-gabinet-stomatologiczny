function validateRegistrationForm() {
  var login = document.getElementById('login-register').value;
  var password = document.getElementById('inputPassword-register').value;
  var confirmPassword = document.getElementById('inputPassword-register2').value;
  var email = document.getElementById('email-register').value;
  var phone = document.getElementById('phone-register').value;
  var past_treatment = document.getElementById('past-treatment-registration').value;
  var userName = document.getElementById('name-register').value;
  var surname = document.getElementById('surname-register').value;

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

  if (!/^[A-Z][a-zA-Z]*$/.test(userName)) {
    document.getElementById('name-register').classList.remove('is-valid');
    document.getElementById('name-register').classList.add('is-invalid');
    document.getElementById('validationServerNameFeedback-success').textContent = '';
    document.getElementById('validationServerNameFeedback-fail').textContent = 'Proszę podać poprawne imie!';
    isValid = false;
  } else {
    document.getElementById('name-register').classList.remove('is-invalid');
    document.getElementById('name-register').classList.add('is-valid');
    document.getElementById('validationServerNameFeedback-fail').textContent = '';
    document.getElementById('validationServerNameFeedback-success').textContent = 'Wygląda OK!';
  }

  if (!/^[A-Z][a-zA-Z]*$/.test(surname)) {
    document.getElementById('surname-register').classList.remove('is-valid');
    document.getElementById('surname-register').classList.add('is-invalid');
    document.getElementById('validationServerSurnameFeedback-success').textContent = '';
    document.getElementById('validationServerSurnameFeedback-fail').textContent = 'Proszę podać poprawne nazwisko!';
    isValid = false;
  } else {
    document.getElementById('surname-register').classList.remove('is-invalid');
    document.getElementById('surname-register').classList.add('is-valid');
    document.getElementById('validationServerSurnameFeedback-fail').textContent = '';
    document.getElementById('validationServerSurnameFeedback-success').textContent = 'Wygląda OK!';
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
      events: function(fetchInfo, successCallback, failureCallback) {
        var login = getLoginFromCookie();
        var request = new XMLHttpRequest();
        request.open('GET','php/getAppointments.php?login=' + login, true);
        request.onload = function() {
          if(request.status >= 200 && request.status < 400) {
            var appointments = JSON.parse(request.responseText);
            var events = [];
            appointments.forEach(function(appointment) {
              var event = {
                title: 'Spotkanie z Lek. Stom. ' + appointment.lekarz,
                start: appointment.data + 'T' + appointment.godzina
              };
              events.push(event);
            });
            successCallback(events);
          }
          else {
            failureCallback(new Error('Błąd pobierania danych'));
          }
        };
        request.onerror = function() {
          failureCallback(new Error('Błąd połączenia'));
        };
        request.send();
      }
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
      var newButton = document.createElement('button');
      newButton.type = 'button';
      newButton.classList.add('btn', 'btn-outline-light');
      newButton.textContent = 'Zaproponuj spotkanie';
      newButton.setAttribute('data-bs-toggle', 'modal');
      newButton.setAttribute('data-bs-target', '#proposalModal');
      navList.appendChild(newButton);
      createModal('proposalModal','Zaproponuj spotkanie','True','True','True');
    }
  }

function createModal(id, header, time, date, radio) {
  var modalContainer = document.createElement('div');
  modalContainer.classList.add('modal', 'fade', 'text-black');
  modalContainer.dataset.bsTheme = 'light';
  modalContainer.id = id;
  modalContainer.dataset.bsKeyboard = 'false';
  modalContainer.tabIndex = '-1';
  modalContainer.setAttribute('aria-labelledby', 'proposalModalLabel');
  modalContainer.setAttribute('aria-hidden', 'true');

  var modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');

  var modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.dataset.bsTheme = 'light';

  var modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');

  var modalTitle = document.createElement('h1');
  modalTitle.classList.add('modal-title', 'fs-5');
  modalTitle.id = 'staticBackdropLabel';
  modalTitle.textContent = header;

  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('btn-close');
  closeButton.dataset.bsDismiss = 'modal';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.style.backgroundColor = 'black';

  var modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  if(time) {
    var inputGroupTime = document.createElement('div');
    inputGroupTime.classList.add('input-group');
  
    var inputButtonTime = document.createElement('button');
    inputButtonTime.type = 'button';
    inputButtonTime.classList.add('btn', 'btn-outline-secondary', 'disabled');
    inputButtonTime.id = 'timeButton';
    inputButtonTime.textContent = 'Wybierz czas';
  
    var inputTime = document.createElement('input');
    inputTime.type = 'time';
    inputTime.id = 'datetimepicker1';
    inputTime.classList.add('form-control');
    inputTime.setAttribute('data-ignore-readonly', true);
    inputTime.placeholder = '';

    var inputGroupAddonTime = document.createElement('span');
    inputGroupAddonTime.classList.add('input-group-addon');
  }
  
  if(date) {
    var inputGroupDate = document.createElement('div');
    inputGroupDate.classList.add('input-group');
    
    var inputButtonDate = document.createElement('button');
    inputButtonDate.type = 'button';
    inputButtonDate.classList.add('btn', 'btn-outline-secondary', 'disabled');
    inputButtonDate.id = 'dateButton';
    inputButtonDate.textContent = 'Wybierz datę';
  
    var inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'datetimepicker2';
    inputDate.classList.add('form-control');
    inputDate.setAttribute('data-ignore-readonly', true);
    inputDate.placeholder = '';

    var inputGroupAddonDate = document.createElement('span');
    inputGroupAddonDate.classList.add('input-group-addon');
  }
  
  if(radio) {
    var formCheck1 = document.createElement('div');
    formCheck1.classList.add('form-check');
  
    var inputDentist1 = document.createElement('input');
    inputDentist1.type = 'radio';
    inputDentist1.id = 'flexRadioDefault1';
    inputDentist1.classList.add('form-check-input');
    inputDentist1.name = 'flexRadioDefault';
  
    var labelDentist1 = document.createElement('label');
    labelDentist1.classList.add('form-check-label');
    labelDentist1.setAttribute('for', 'flexRadioDefault1');
    labelDentist1.textContent = 'Lek. Stom. Kacper Farion';
  
    var formCheck2 = document.createElement('div');
    formCheck2.classList.add('form-check');
  
    var inputDentist2 = document.createElement('input');
    inputDentist2.type = 'radio';
    inputDentist2.id = 'flexRadioDefault2';
    inputDentist2.classList.add('form-check-input');
    inputDentist2.name = 'flexRadioDefault';
    inputDentist2.checked = true;
  
    var labelDentist2 = document.createElement('label');
    labelDentist2.classList.add('form-check-label');
    labelDentist2.setAttribute('for', 'flexRadioDefault2');
    labelDentist2.textContent = 'Lek. Stom. Bartłomiej Kozieł';
  
    formCheck1.appendChild(inputDentist1);
    formCheck1.appendChild(labelDentist1);
  
    formCheck2.appendChild(inputDentist2);
    formCheck2.appendChild(labelDentist2);
  }
  
  var inputGroupAddonDentist = document.createElement('span');
  inputGroupAddonDentist.classList.add('input-group-addon');

  var timeIcon = document.createElement('span');
  timeIcon.classList.add('glyphicon', 'glyphicon-time');

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);
  if(time) {
    inputGroupAddonTime.appendChild(timeIcon);
    inputGroupTime.appendChild(inputButtonTime);
    inputGroupTime.appendChild(inputTime);
    inputGroupTime.appendChild(inputGroupAddonTime);
  }
  
  if(date) {
    inputGroupAddonDate.appendChild(timeIcon);
    inputGroupDate.appendChild(inputButtonDate);
    inputGroupDate.appendChild(inputDate);
    inputGroupDate.appendChild(inputGroupAddonDate);
  }
  
  var alertPlaceholder = document.createElement('div');
  alertPlaceholder.id = 'proposal-alert-placeholder';

  var modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');

  var closeButton2 = document.createElement('button');
  closeButton2.type = 'button';
  closeButton2.classList.add('btn', 'btn-outline-secondary');
  closeButton2.dataset.bsDismiss = 'modal';
  closeButton2.textContent = 'Close';

  var proposalButton = document.createElement('button');
  proposalButton.type = 'submit';
  proposalButton.id = 'proposal-button';
  proposalButton.classList.add('btn', 'btn-outline-warning');
  proposalButton.textContent = 'Zaproponuj!';

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  modalFooter.appendChild(closeButton2);
  modalFooter.appendChild(proposalButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);
  modalContainer.appendChild(modalDialog);

  var modalsSection = document.querySelector('section.modals');
  modalsSection.appendChild(modalContainer);

  if(time) {
    modalBody.appendChild(inputGroupTime);
    modalBody.appendChild(document.createElement('br'));
  }
  if(date) {
    modalBody.appendChild(inputGroupDate);
    modalBody.appendChild(document.createElement('br'));
  }
  if(radio) {
    modalBody.appendChild(formCheck1);
    modalBody.appendChild(formCheck2);
  }
  
  modalBody.appendChild(alertPlaceholder);
}

function getLoginFromCookie() {
  var cookieName = 'cred';
  var cookies = document.cookie.split(";");
  for(var i=0; i<cookies.length;i++) {
    var cookie = cookies[i].trim();
    if(cookie.indexOf(cookieName) === 0) {
      var cookieValue = cookie.substring(cookieName.length + 1);
      var login = cookieValue.split("|")[0];
      return login;
    }
  }
  return "";
}