<?php
    $dbHost = 'localhost';
    $dbUser = 'root';
    $dbPassword = '';
    $dbName = 'spotkania';
    $login = $_GET['login'];

    $conn = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);

    if($conn->connect_error) {
        die("Błąd połączenia z bazą danych: ".$conn->connect_error);
    }

    $sql = "SELECT * FROM zaplanowane WHERE login = '$login'";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        $appointments = array();
        while($row = $result->fetch_assoc()) {
            $appointment = array(
                'lekarz' => $row['lekarz'],
                'data' => $row['data'],
                'godzina' => $row['godzina']
            );
            $appointments[] = $appointment;
        }
        header('Content-Type: application/json');
        echo json_encode($appointments);
    }
    else {
        header('Content-Type: application/json');
        echo json_encode([]);
    }
    $conn->close();
?>