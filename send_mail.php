<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    die("Method not allowed");
}

// CSRF-check
if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
    die("Ongeldig verzoek");
}

// Honeypot check
if (!empty($_POST['website'])) {
    die("Spam gedetecteerd");
}

// Input sanitization
$naam = htmlspecialchars(trim($_POST['naam'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$bericht = htmlspecialchars(trim($_POST['bericht'] ?? ''));

// Validation
$errors = [];
if (empty($naam)) $errors[] = "Naam is verplicht";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Ongeldig e-mailadres";
if (strlen($bericht) < 10) $errors[] = "Bericht moet minimaal 10 tekens bevatten";

if (!empty($errors)) {
    $_SESSION['form_errors'] = $errors;
    header("Location: contact.html#form");
    exit;
}

// Email headers beveiligen
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=utf-8',
    'X-Mailer' => 'PHP/' . phpversion()
];

// Email inhoud
$email_body = "Naam: $naam\n";
$email_body .= "E-mail: $email\n\n";
$email_body .= "Bericht:\n" . wordwrap($bericht, 70);

// Versturen
if (mail('info@pvoketikoti.nl', 'Nieuw contactbericht', $email_body, $headers)) {
    $_SESSION['form_success'] = true;
} else {
    $_SESSION['form_errors'] = ["Er is een fout opgetreden bij het verzenden"];
}

header("Location: contact.html#form");
exit;
?>
