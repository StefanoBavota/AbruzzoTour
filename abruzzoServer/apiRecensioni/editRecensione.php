<?php

include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$titolo = $data['titolo'];
$descrizione = $data['descrizione'];
$id_utente = $data['id_utente'];
$id_percorso = $data['id_percorso'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE recensioni SET titolo = '$titolo', descrizione = '$descrizione', id_utente = '$id_utente', id_percorso = '$id_percorso' WHERE id = '$id'");

if ($q) {
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
