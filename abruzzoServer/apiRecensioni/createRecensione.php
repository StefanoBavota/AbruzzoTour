<?php

include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$titolo = $data['titolo'];
$descrizione = $data['descrizione'];
$id_utente = $data['id_utente'];
$id_percorso = $data['id_percorso'];

$q = mysqli_query($con, "INSERT INTO recensioni (titolo, descrizione, id_utente, id_percorso) VALUES ('$titolo', '$descrizione', '$id_utente', '$id_percorso') ");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);