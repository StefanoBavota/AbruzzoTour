<?php

include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$nome = $data['nome'];
$difficolta = $data['difficolta'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE percorsi SET nome = '$nome', difficolta = '$difficolta' WHERE id = '$id'");

if ($q) {
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
