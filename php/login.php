<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $login = $_POST['login'];
    $password = $_POST['haslo'];
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
        if ($row['password'] == $password) {
            header("Location: index_login.php");
            exit();
        } else {
            echo "Błędne hasło";
        }
    } else {
        echo "Niepoprawny login";
    }

    $conn->close();
}
?>