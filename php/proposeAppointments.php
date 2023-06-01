<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $login = "";
        $date = "";
        $time = "";
        $name = "";
        $surname = "";
        $doctor = "";
        $desc = "";


        $servername = "localhost";
        $username = "root";
        $db_password = "";
        $dbname = "spotkania";

        $conn = new mysqli($servername, $username, $db_password, $dbname);
        if ($conn->connect_error) {
            die("Nie można połączyć z bazą danych: " . $conn->connect_error);
        }

        $sqlCheck = "SELECT * FROM `propozycje` WHERE `lekarz` = '$doctor' AND `data` = '$date' AND (`godzina` = ADDTIME('$time', '00:30:00') OR `godzina` = SUBTIME('$time', '00:30:00'));";
        $resultCheck = $conn->query($sqlCheck);
        if($resultCheck->num_rows > 0) {
            $response = array('status' => 'error', 'message' => 'W tym samym czasie istnieje już inna propozycja spotkania.');
            echo json_encode($response);
        }
        else {
            $sql = "INSERT INTO `propozycje` (`login`, `imie`, `nazwisko`, `lekarz`, `opis`, `data`, `godzina`) VALUES ('$login', '$name', '$surname', '$doctor', '$desc', '$date', '$time');";
            if ($conn->query($sql) === TRUE) {
                $response = array('status' => 'success', 'message' => 'Propozycja spotkania została złożona.');
                echo json_encode($response);
            } else {
                $response = array('status' => 'error', 'message' => 'Błąd podczas składania propozycji spotkania: ' . $conn->error);
                echo json_encode($response);
            }
        }
    }
?>