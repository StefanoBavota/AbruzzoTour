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

$q = mysqli_query($con, "INSERT INTO percorsi (nome, info, image, latitude, longitude) VALUES ('$nome', '$info', '$image', '$latitude', '$longitude') ");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);