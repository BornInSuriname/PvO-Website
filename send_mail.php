<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = htmlspecialchars($_POST["naam"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $bericht = htmlspecialchars($_POST["bericht"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Ongeldig e-mailadres.";
        exit;
    }

    $to = "info@pvoketikoti.nl";
    $subject = "Nieuw bericht via contactformulier";
    $email_body = "Naam: $naam\nE-mail: $email\nBericht:\n$bericht";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "Je bericht is verzonden!";
    } else {
        echo "Fout bij verzenden.";
    }
} else {
    echo "Ongeldige aanvraag.";
}
?>