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