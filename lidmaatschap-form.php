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
    $mail->Host       = 'smtp.transip.email';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@pvoketikoti.nl';
    $mail->Password   = 'Bestuur.PVO25';
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
