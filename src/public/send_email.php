<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "nicolas.bochor@amanda-care.com";
    $subject = "Nuevo contacto web de: $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mail_body = "Name: $name\n";
    $mail_body .= "Email: $email\n";
    $mail_body .= "Message:\n$message";

    if (mail($to, $subject, $mail_body, $headers)) {
        $response = "Muchas Gracias por contactarnos! Nos pondremos en contacto con usted";
    } else {
        $response = "Algo salió mal por favor intente de nuevo mas tarde.";
    }

    echo json_encode(['message' => $response]);
}
?>