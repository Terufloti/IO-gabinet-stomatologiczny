<?php
    $login = "";
    if(isset($_GET['login'])) {
        $login = $_GET['login'];
    }
    if(isset($_GET['action'])) {
        $action = $_GET['action'];
        switch($action) {
            case 'login': login(); break;
            case 'register': register(); break;
            case 'proposeAppointment': proposeAppointments(); break;
            case 'getFunctionCode': getFunctionCode($login); break;
            case 'getName': getName($login); break;
            case 'getSurname': getSurname($login); break;
            case 'getAppointments': getAppointments(); break;
        }
    }
    function login() {
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
    }
    function register() {
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

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
    }

    function proposeAppointments() {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $login = $_POST['login'];
            $date = $_POST['date'];
            $time = $_POST['time'];
            $name = $_POST['name'];
            $surname = $_POST['surname'];
            $doctor = $_POST['doctor'];

            $servername = "localhost";
            $username = "root";
            $db_password = "";
            $dbname = "spotkania";

            $conn = new mysqli($servername, $username, $db_password, $dbname);
            if ($conn->connect_error) {
                die("Nie można połączyć z bazą danych: " . $conn->connect_error);
            }

            $sqlCheck = "SELECT * FROM `zaplanowane` WHERE `lekarz` = '$doctor' AND `data` = '$date' AND (`godzina` = ADDTIME('$time', '00:30:00') OR `godzina` = SUBTIME('$time', '00:30:00'));";
            $resultCheck = $conn->query($sqlCheck);
            if($resultCheck->num_rows > 0) {
                $response = array('status' => 'error', 'message' => 'W tym samym czasie istnieje już inne spotkanie.');
                header('Content-Type: application/json');
                echo json_encode($response);
            }
            else {
                $sql = "INSERT INTO `propozycje` (`login`, `imie`, `nazwisko`, `lekarz`, `data`, `godzina`) VALUES ('$login', '$name', '$surname', '$doctor', '$date', '$time');";
                if ($conn->query($sql) === TRUE) {
                    $response = array('status' => 'success', 'message' => 'Propozycja spotkania została złożona.');
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    $response = array('status' => 'error', 'message' => 'Błąd podczas składania propozycji spotkania: ' . $conn->error);
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }
            }
        }
    }
    function getFunctionCode($login) {
        function checkLogin($login) {
            $dsn = 'mysql:host=localhost;dbname=IO';
            $username = 'root';
            $password = '';
        
            try {
                $pdo = new PDO($dsn, $username, $password);
                $query = 'SELECT function FROM login WHERE login = ?';
                $stmt = $pdo->prepare($query);
                $stmt->execute([$login]);
        
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
                if ($result !== false) {
                    return $result['function'];
                } else {
                    throw new Exception('Błąd: Użytkownik o podanym loginie nie istnieje.');
                }
            } catch (PDOException $e) {
                echo 'Błąd podczas zapytania do bazy danych: ' . $e->getMessage();
                return false;
            }
        }
        
        if (isset($_GET['login'])) {
            $login = $_GET['login'];
            try {
                $imie = checkLogin($login);
                echo $imie;
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        } else {
            echo 'Błąd: Brak przekazanego loginu.';
        }
    }

    function getName($login) {
        function checkLogin($login) {
            $dsn = 'mysql:host=localhost;dbname=IO';
            $username = 'root';
            $password = '';
        
            try {
                $pdo = new PDO($dsn, $username, $password);
                $query = 'SELECT name FROM login WHERE login = ?';
                $stmt = $pdo->prepare($query);
                $stmt->execute([$login]);
        
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
                if ($result !== false) {
                    return $result['name'];
                } else {
                    throw new Exception('Błąd: Użytkownik o podanym loginie nie istnieje.');
                }
            } catch (PDOException $e) {
                echo 'Błąd podczas zapytania do bazy danych: ' . $e->getMessage();
                return false;
            }
        }
        
        if (isset($_GET['login'])) {
            $login = $_GET['login'];
            try {
                $imie = checkLogin($login);
                echo $imie;
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        } else {
            echo 'Błąd: Brak przekazanego loginu.';
        }
    }

    function getSurname($login) {
        function checkLogin($login) {
            $dsn = 'mysql:host=localhost;dbname=IO';
            $username = 'root';
            $password = '';
        
            try {
                $pdo = new PDO($dsn, $username, $password);
                $query = 'SELECT surname FROM login WHERE login = ?';
                $stmt = $pdo->prepare($query);
                $stmt->execute([$login]);
        
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
                if ($result !== false) {
                    return $result['surname'];
                } else {
                    throw new Exception('Błąd: Użytkownik o podanym loginie nie istnieje.');
                }
            } catch (PDOException $e) {
                echo 'Błąd podczas zapytania do bazy danych: ' . $e->getMessage();
                return false;
            }
        }
        
        if (isset($_GET['login'])) {
            $login = $_GET['login'];
            try {
                $nazwisko = checkLogin($login);
                echo $nazwisko;
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        } else {
            echo 'Błąd: Brak przekazanego loginu.';
        }
    }

    function getAppointments() {
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
    }
?>