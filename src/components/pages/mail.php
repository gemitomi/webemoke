<?php

// Segédfüggvény a bemeneti adatok tisztításához
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$messageBox = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['send'])) {

    // Bemeneti adatok tisztítása
    $surname = clean_input($_POST['surname'] ?? '');
    $firstname = clean_input($_POST['firstname'] ?? '');
    $email = clean_input($_POST['email_from'] ?? '');
    $mobil = clean_input($_POST['phone'] ?? '');
    $message = clean_input($_POST['message'] ?? '');
    $subject = "Érdeklődés";

    // Ellenőrzés, hogy minden szükséges mező ki van-e töltve
    if (!empty($surname) && !empty($firstname) && !empty($mobil)  && !empty($email) &&  !empty($message)) {
        // Email törzs összeállítása
        $body = "Név: " . $name . " " . $firstname . "\r\n<br/>";
        $body .= "Telefonszám: " . $mobil . "\r\n<br/>";
        $body .= "Üzenet: " . $message . "\r\n<br/>";

        // Email fejléc összeállítása
        $mailheader = 'MIME-Version: 1.0' . "\r\n";
        $mailheader .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $mailheader .= "From: " . $name . " <" . $email . ">\r\n";

        $recipient = "info@bekesemoke.hu";

        // Email küldése
        if (mail($recipient, $subject, $body, $mailheader)) {
            $messageBox = "Email sikeresen elküldve!";
        } else {
            $messageBox = "Hiba történt az email küldése során.";
        }
    } else {
        $messageBox = "Kérjük, töltse ki az összes mezőt!";
    }
}
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Küldés</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script>
        function showMessage() {
            var message = "<?php echo $messageBox; ?>";
            if (message) {
                alert(message);
                window.location.href = "https://www.gemeterzsuzsa.hu";
            }
        }
    </script>
</head>
<body onload="showMessage()">
</body>
</html>