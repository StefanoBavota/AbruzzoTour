<?php 
include_once '../config.php';
include_once '';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = json_decode(file_get_contents("php://input"));

    $uname = $data->username;
    $pass = $data->password;

    $sql = $conn->query("SELECT * FROM users WHERE username = '$uname'");
    if ($sql->num_rows > 0) {
        $user = $sql->fetch_assoc();
        if (password_verify($pass, $user['password'])){
            $key = "YOUR_SECRET_KEY"; //JWT KWY
        }
    }

}