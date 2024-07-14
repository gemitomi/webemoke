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
    $name = clean_input($_POST['name'] ?? '');
    $birthname = clean_input($_POST['birthname'] ?? '');
    $birthday = clean_input($_POST['birthday'] ?? '');
    $birthplace = clean_input($_POST['birthplace'] ?? '');
    $mother = clean_input($_POST['mother'] ?? '');
    $school = clean_input($_POST['school'] ?? '');
    $addres = clean_input($_POST['addres'] ?? '');
    $phone = clean_input($_POST['phone'] ?? '');
    $email = clean_input($_POST['email'] ?? '');
    $motivation = clean_input($_POST['motivation'] ?? '');
    $question = clean_input($_POST['question'] ?? '');
    $subject = "Jelentkezés az önismereti tréningre";

    // Ellenőrzés, hogy minden szükséges mező ki van-e töltve
    if (!empty($name) && !empty($birthname) && !empty($birthday) && !empty($birthplace) && !empty($mother)  &&!empty($school)  && !empty($addres)  && !empty($phone) && !empty($email) &&  !empty($motivation) &&  $question) {

        // Email törzs összeállítása
        $body = "Név: " . $name . "\r\n<br/>";
        $body .= "Születési név: " . $birthname . "\r\n<br/>";
        $body .= "Születési idő: " . $birthday . "\r\n<br/>";
        $body .= "Születési hely: " . $birthplace . "\r\n<br/>";
        $body .= "Anyja neve: " . $mother . "\r\n<br/>";
        $body .= "Iskolai végzettség: " . $school . "\r\n<br/>";
        $body .= "Számlázási cím: " . $addres . "\r\n<br/>";
        $body .= "Telefonszám: " . $phone . "\r\n<br/>";
        $body .= "E-mail: " . $email . "\r\n<br/>";
        $body .= "Motiváció: " . $motivation . "\r\n<br/>";
        $body .= "Kérdés: " . $question . "\r\n<br/>";

        // Email fejléc összeállítása
        $mailheader = 'MIME-Version: 1.0' . "\r\n";
        $mailheader .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $mailheader .= "From: " . $name . " <" . $email . ">\r\n";

        $recipient = "info@gemeterzsuzsa.hu";

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