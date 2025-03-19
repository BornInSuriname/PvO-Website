    <?php
    session_start();
    if (!isset($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    ?>
    
    
    <?php
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    if (!isset($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    ?>
    
    session_start();
    if (!isset($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    error_log("CSRF Token gegenereerd: " . $_SESSION["csrf_token"]);
    ?>
     session_start(); ?>
<?php

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (!isset($_POST["csrf_token"]) || $_POST["csrf_token"] !== $_SESSION["csrf_token"]) {
                die("Ongeldige aanvraag. CSRF-verificatie mislukt.");
            }
        }
        

        if (!isset($_SESSION["csrf_token"])) {
            $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
        }
        

        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
        if (!$email) {
            die("Ongeldig e-mailadres.");
        }
        

            session_start();
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
                    die("Ongeldige aanvraag.");
                }
            }
            
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
