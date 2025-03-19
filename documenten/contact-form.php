<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    $to = "info@pvoketikoti.nl";
    $subject = "Nieuw Contactbericht van $name";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $email_body = "Naam: $name\n";
    $email_body .= "E-mail: $email\n";
    $email_body .= "Bericht:\n$message\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "Bedankt! Je bericht is verzonden.";
    } else {
        echo "Er is een fout opgetreden. Probeer het opnieuw.";
    }
} else {
    echo "Ongeldige aanvraag.";
}
?>
