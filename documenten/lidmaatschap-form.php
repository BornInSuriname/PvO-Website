<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST["phone"]);
    $contribution = isset($_POST["contribution"]) ? "Ja" : "Nee";

    $to = "info@pvoketikoti.nl";
    $subject = "Nieuwe Lidmaatschapsaanvraag van $name";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $email_body = "Naam: $name\n";
    $email_body .= "E-mail: $email\n";
    $email_body .= "Telefoonnummer: $phone\n";
    $email_body .= "Bijdrage: $contribution\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "Bedankt! Je inschrijving is verzonden.";
    } else {
        echo "Er is een fout opgetreden. Probeer het opnieuw.";
    }
} else {
    echo "Ongeldige aanvraag.";
}
?>
