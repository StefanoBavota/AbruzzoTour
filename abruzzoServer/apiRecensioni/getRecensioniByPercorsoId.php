<?php

include "../config.php";
$data = array();
$id_percorso = $_GET['id'];

$q = mysqli_query($con, "SELECT * FROM recensioni INNER JOIN utenti ON utenti.id = recensioni.id_utente WHERE id_percorso = $id_percorso");

while ($row = mysqli_fetch_object($q)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);