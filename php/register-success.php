<?php
    session_start();
    if (!isset($_SESSION['registration_success']) || $_SESSION['registration_success'] !== true) {
        header("Location: /IO-gabinet-stomatologiczny/index.php");
        exit;
    }
?>
<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Zarejestrowano pomyślnie!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid"> 
            <a class="navbar-brand">Farion&Kozieł Co.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-center-register-success">
        <div class="text-center-register-success border border-warning-subtle">
                <h1> Rejestracja przebiegła pomyślnie! </h1><br />
                <p> Możesz teraz sprawdzić swój adres email - <?php echo $_SESSION['registered_email']; ?>!<br /> Zostało wysłane na niego potwierdzenie rejestracji! <br />
                Możesz również wrócić do strony głównej przyciskiem poniżej i się zalogować! Dziękujemy! </p> <br />
                <button type="button" class="btn btn-outline-success" onclick="window.location.href = '../index.php';" >Strona główna</button>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
  </body>
</html>

<?php
    unset($_SESSION['registration_success']);
?>