<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
if (!isset($_SESSION['registration_success']) || $_SESSION['registration_success'] !== true) {
    header("Location: /IO-gabinet-stomatologiczny/index.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $login = $_POST['login'];
    $password = $_POST['haslo-register'];
    $email = $_POST['email'];
    $phone = $_POST['phone-number'];
    $past = $_POST['past-treatment'];
    $name = $_POST['nameRegister'];
    $surname = $_POST['surnameRegister'];

    $servername = "localhost";
    $username = "root";
    $db_password = "";
    $dbname = "IO";

    $conn = new mysqli($servername, $username, $db_password, $dbname);

    if ($conn->connect_error) {
        die("Nie można połączyć z bazą danych: " . $conn->connect_error);
    }

    $checkQuery = "SELECT * FROM `login` WHERE `login`='$login' OR `email`='$email'";
    $checkResult = $conn->query($checkQuery);

    if ($checkResult->num_rows > 0) {
        $response = array('status' => 'error', 'message' => 'Użytkownik o podanym loginie lub adresie e-mail już istnieje.');
        echo json_encode($response);
    } else {
        $sql = "INSERT INTO `login` (`login`, `password`, `function`, `email`, `phone`, `past`, `name`, `surname`) VALUES ('$login', '$password', '10', '$email', '$phone', '$past', '$name', '$surname');";

        if ($conn->query($sql) === TRUE) {
            $response = array('status' => 'success', 'message' => 'Rejestracja zakończona sukcesem.');
            echo json_encode($response);
            session_start();
            $_SESSION['registration_success'] = true;
            $_SESSION['registered_email'] = $email;
        } else {
            $response = array('status' => 'error', 'message' => 'Błąd podczas rejestracji: ' . $conn->error);
            echo json_encode($response);
        }
    }

    $conn->close();
}
unset($_SESSION['registration_success']);
?>