<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$name    = strip_tags(trim($_POST['name'] ?? ''));
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = strip_tags(trim($_POST['phone'] ?? ''));
$message = strip_tags(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$gmail_user = 'degitech.kontakt@gmail.com';
$gmail_pass = 'bscsziyoipymnwla';
$to         = 'degitech.kontakt@gmail.com';
$subject    = '=?UTF-8?B?' . base64_encode('Neue Beratungsanfrage von ' . $name) . '?=';
$body       = "Name: $name\r\nE-Mail: $email\r\nTelefon: " . ($phone ?: '—') . "\r\n\r\nNachricht:\r\n$message";

try {
    $socket = stream_socket_client('tcp://smtp.gmail.com:587', $errno, $errstr, 30);
    if (!$socket) throw new Exception("Connect failed: $errstr");

    $read = function() use ($socket) { return fgets($socket, 1024); };
    $write = function($cmd) use ($socket) { fwrite($socket, $cmd . "\r\n"); };

    $read(); // 220 greeting

    $write('EHLO degi-tech.com');
    while ($line = $read()) { if ($line[3] === ' ') break; }

    $write('STARTTLS');
    $read(); // 220

    stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);

    $write('EHLO degi-tech.com');
    while ($line = $read()) { if ($line[3] === ' ') break; }

    $write('AUTH LOGIN');
    $read(); // 334 Username
    $write(base64_encode($gmail_user));
    $read(); // 334 Password
    $write(base64_encode($gmail_pass));
    $auth = $read(); // 235

    if (substr($auth, 0, 3) !== '235') throw new Exception("Auth failed: $auth");

    $write("MAIL FROM: <$gmail_user>");
    $read();
    $write("RCPT TO: <$to>");
    $read();
    $write('DATA');
    $read(); // 354

    $headers  = "From: Degi-Tech Website <$gmail_user>\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Subject: $subject\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    fwrite($socket, $headers . "\r\n" . $body . "\r\n.\r\n");
    $sent = $read(); // 250

    $write('QUIT');
    fclose($socket);

    if (substr($sent, 0, 3) !== '250') throw new Exception("Send failed: $sent");

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
