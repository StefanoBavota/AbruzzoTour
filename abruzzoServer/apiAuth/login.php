<?php

include "../config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$email = $data['email'];
$password = $data['password'];

$sql = $con->query("SELECT * FROM utenti WHERE email = '$email' AND password = '$password'");

if ($sql->num_rows > 0) {
    $user = $sql->fetch_assoc();

    $payload = array(
        'id' => $user['id'],
        'nome' => $user['nome'],
        'cognome' => $user['cognome'],
        'email' => $user['email']
    );

 echo json_encode($payload);
 echo mysqli_error($con);
}