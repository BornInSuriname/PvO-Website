<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.transip.email';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@pvoketikoti.nl';
    $mail->Password   = 'JOUW_E-MAIL_WACHTWOORD';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('info@pvoketikoti.nl', 'PvO Keti Koti');
    $mail->addAddress('info@pvoketikoti.nl');

    $mail->Subject = 'Nieuwe lidmaatschapsaanvraag van ' . $_POST["name"];
    $mail->Body    = "Naam: " . $_POST["name"] . "\n"
                    . "E-mail: " . $_POST["email"] . "\n"
                    . "Telefoonnummer: " . $_POST["phone"] . "\n"
                    . "Bijdrage: " . (isset($_POST["contribution"]) ? "Ja" : "Nee");

    $mail->send();
    echo 'Bedankt! Je inschrijving is verzonden.';
} catch (Exception $e) {
    echo "Fout bij verzenden: {$mail->ErrorInfo}";
}
?>
