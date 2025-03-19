<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.transip.email'; // SMTP-server van TransIP
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@pvoketikoti.nl'; // Jouw TransIP e-mailadres
    $mail->Password   = 'JOUW_E-MAIL_WACHTWOORD'; // Jouw wachtwoord
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Beveiligde verbinding
    $mail->Port       = 587;

    $mail->setFrom('info@pvoketikoti.nl', 'PvO Keti Koti');
    $mail->addAddress('info@pvoketikoti.nl'); // Ontvanger (jijzelf)

    $mail->Subject = 'Nieuw contactbericht van ' . $_POST["name"];
    $mail->Body    = "Naam: " . $_POST["name"] . "\n"
                    . "E-mail: " . $_POST["email"] . "\n"
                    . "Bericht: " . $_POST["message"];

    $mail->send();
    echo 'Bedankt! Je bericht is verzonden.';
} catch (Exception $e) {
    echo "Fout bij verzenden: {$mail->ErrorInfo}";
}
?>
