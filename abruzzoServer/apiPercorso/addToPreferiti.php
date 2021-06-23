<?php

include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$id_percorso = $_GET['id'];
$id_utente = $data['id_utente'];

$q = $con->query("SELECT * FROM preferiti WHERE id_percorso = '$id_percorso' AND id_utente = '$id_utente'");

if($q->num_rows <= 0){
    $sql = $con->query("INSERT INTO preferiti (id_percorso, id_utente) VALUES ('$id_percorso', '$id_utente') ");
    if ($sql) {
        http_response_code(201);
        $message['status'] = "Success";
    } else {
        http_response_code(422);
        $message['status'] = "Error";
    }
} else {
    http_response_code(422);
    $message['status'] = "Percorso già aggiunto";
}

echo json_encode($message);
echo mysqli_error($con);