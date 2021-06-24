<?php

include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$nome = $data['nome'];
$info = $data['info'];
$image = $data['image'];
$latitude = $data['latitude'];
$longitude = $data['longitude'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE percorsi SET nome = '$nome', info = '$info', image = '$image', latitude = '$latitude', longitude = '$longitude' WHERE id = '$id'");

if ($q) {
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
