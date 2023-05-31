<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $login = $_POST['login-login'];
    $password = $_POST['haslo-login'];
    
    $servername = "localhost";
    $username = "root";
    $db_password = "";
    $dbname = "IO";

    $conn = new mysqli($servername, $username, $db_password, $dbname);

    if ($conn->connect_error) {
        die("Nie można połączyć z bazą danych: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM login WHERE login = '$login'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($row['password'] === $password) {
            $response = array(
                "status" => "success",
                "message" => "Logowanie zakończone sukcesem."
            );
            echo json_encode($response);
        } else {
            $response = array(
                "status" => "invalid_password",
                "message" => "Niepoprawne hasło dla tego loginu!"
            );
            echo json_encode($response);
        }
    } else {
        $response = array(
            "status" => "invalid_login",
            "message" => "Niepoprawny login!"
        );
        echo json_encode($response);
    }

    $conn->close();
}
?>
