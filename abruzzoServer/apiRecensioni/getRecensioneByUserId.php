<?php

include "../config.php";
$data = array();
$id_utente = $_GET['id'];

$q = mysqli_query($con, "SELECT * FROM recensioni WHERE id_utente = $id_utente");

while ($row = mysqli_fetch_object($q)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);