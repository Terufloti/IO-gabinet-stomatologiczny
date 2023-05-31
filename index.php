<?php
    require_once 'php/validation.php';
?>

<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gabinet stomatologiczny</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="js/utils.js"></script>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <?php
    if(isset($_COOKIE['cred']) && !empty($_COOKIE['cred'])) {
        sprawdzCiasteczko();
    }
    ?>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid"> 
            <a class="navbar-brand">Farion & Kozieł Co.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">O nas</a>
                    </li>
                </ul>
            </div>

            
            <div class="d-flex">
                <div class="btn-group" role="group" aria-label="Login/register/logout outlined group">
                    <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#registerModal">Zarejestruj się</button>
                    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal">Logowanie</button>
                </div>
            </div>
        </div>
    </nav>
    
    <div class="container">
        <section class="main">

        </section>



        <section class="modals">
            <div class="modal fade text-black" data-bs-theme="light" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" data-bs-theme="light">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Zaloguj</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="background-color: black;"></button>
                        </div>
                        <form id="login-form" method="POST" action="php/login.php">
                            <div class="modal-body">
                                <input type="login" class="form-control" id="inputLogin-login" name="login-login" placeholder="Login">
                                <div id="validationServerLogin-LoginFeedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerLogin-LoginFeedback-success"class="valid-feedback"></div>
                                <br />
                                <input type="password" id="inputPassword-login" name="haslo-login" class="form-control" aria-labelledby="passwordHelpBlock" placeholder="Hasło">
                                <div id="validationServerPassword-LoginFeedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerPassword-LoginFeedback-success"class="valid-feedback"></div>
                                <br />
                                <div id="login-alert-placeholder"></div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" id="login-button" class="btn btn-outline-success">Loguj!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade text-black" id="registerModal" data-bs-theme="light" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Zarejestruj się u nas!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="register-form" method="POST" action="php/register.php">
                            <div class="modal-body">
                                <input type="login" class="form-control" id="login-register" name="login" placeholder="Login*" aria-describedby="loginHelp">
                                <div id="validationServerUsernameFeedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerUsernameFeedback-success" class="valid-feedback"></div>
                                <div id="loginHelp" class="form-text">Login musi zaczynać się wielką literą.</div>
                                <br />
                                <input type="password" id="inputPassword-register" name="haslo-register" class="form-control" aria-labelledby="passwordHelpBlock" placeholder="Hasło*" aria-describedby="passwordHelp">
                                <div id="validationServerPassword01Feedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerPassword01Feedback-success" class="valid-feedback"></div>
                                <div id="passwordHelp" class="form-text">Hasło musi zawierać wielką literę, cyfrę, znak specjalny oraz być długie na conajmniej 10 znaków.</div>
                                <input type="password" id="inputPassword-register2" name="haslo-register" class="form-control" aria-labelledby="passwordHelpBlock" placeholder="Powtórz hasło*">
                                <div id="validationServerPasswordFeedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerPasswordFeedback-success" class="valid-feedback"></div>
                                <br />
                                <input type="email" class="form-control" id="email-register" name="email" placeholder="Email*">
                                <div id="validationServerEmailFeedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerEmailFeedback-success" class="valid-feedback"></div>
                                <br />
                                <input type="text" class="form-control" id="phone-register" name="phone-number" placeholder="Numer telefonu* np. (+48999999999)">
                                <div id="validationServerPhoneFeedback-fail" class="invalid-feedback"></div>
                                <div id="validationServerPhoneFeedback-success" class="valid-feedback"></div>
                                <br />
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="past-treatment-registration" name="past-treatment" checked>
                                    <label class="form-check-label" for="past-treatment-registration">Czy leczyłeś/aś się już u nas?</label>
                                </div>
                                <div id="alert-placeholder"></div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" id="register-button" class="btn btn-outline-success">Zarejestruj!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script>
        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var isValid = validateRegistrationForm();

            if (isValid) {
                setTimeout(function() {
                    var response = {
                        status: 'success'
                    };

                    if (response.status === 'success') {
                        alertTriggering('Wszystkie dane są poprawne. Nastąpi przekierowanie!', true);
                        var formData = new FormData();
                        formData.append('login', document.getElementById('login-register').value);
                        formData.append('haslo-register', document.getElementById('inputPassword-register').value);
                        formData.append('email', document.getElementById('email-register').value);
                        formData.append('phone-number', document.getElementById('phone-register').value);
                        formData.append('past-treatment', document.getElementById('past-treatment-registration').value);

                        fetch('php/register.php', {
                            method: 'POST',
                            body: formData
                        }).then(function(response) {
                            return response.json();
                        }).then(function(data) {
                            if (data.status === 'success') {
                                alertTriggering('Rejestracja zakończona sukcesem.', true);
                                window.location.href = 'php/register-success.php';
                            } else {
                                alertTriggering('Błąd podczas rejestracji: ' + data.message, false);
                            }
                        })
                    } else {
                        alertTriggering('Wystąpił błąd podczas rejestracji!', false);
                    }
                }, 2000);
            } else {
                alertTriggering('Dane niepoprawne! Popraw dane.', false);
            }
        });
    </script>
    <script>
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            validateLoginForm();
        });
    </script>
    <script>
        if (<?php echo json_encode(sprawdzCiasteczko()); ?>) {
            loggedCustomer();
            addHeaderWithName("Kacper");
        }
    </script>
  </body>
</html>