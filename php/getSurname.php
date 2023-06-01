<?php
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
?>