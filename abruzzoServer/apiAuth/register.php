<?php

include "../config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$nome = $data['nome'];
$cognome = $data['cognome'];
$email = $data['email'];
$password = $data['password'];





$q = mysqli_query($con, "INSERT INTO utenti (nome, cognome, email, password) VALUES ('$nome', '$cognome', '$email', '$password') ");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
    
}

echo json_encode($message);
echo mysqli_error($con);