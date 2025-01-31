<?php
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$message = "";
$method = $_SERVER['REQUEST_METHOD'];
$c = true;

try {
	if ($method === 'POST' || $method === 'GET') {
		$project_name = trim($_REQUEST["project_name"]);
		$admin_email  = trim($_REQUEST["admin_email"]);
		$form_subject = trim($_REQUEST["form_subject"]);

		foreach ($_REQUEST as $key => $value) {
			if ($value != "" && !in_array($key, ["project_name", "admin_email", "form_subject"])) {
				$message .= "
                " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>" . htmlspecialchars($key) . "</b></td>
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'>" . htmlspecialchars($value) . "</td>
                </tr>
                ";
			}
		}
	}

	$message = "<table style='width: 100%;'>$message</table>";

	$mail = new PHPMailer(true);

	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host       = 'smtp.gmail.com';
	$mail->SMTPAuth   = true;
	$mail->Username   = 'maskoul1ayoub@gmail.com
';                 //SMTP username (your Gmail address)
	$mail->Password   = 'pygsgodidqsvwfsk';
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
	$mail->Port       = 587;

	//Recipients
	$mail->setFrom($admin_email, $project_name);
	$mail->addAddress('maskoul1ayoub@gmail.com'); //rhuniouafae@gmail.com                       
	$mail->addReplyTo('maskoul1ayoub@gmail.com'); //rhuniouafae@gmail.com

	//Content
	$mail->isHTML(true);
	$mail->Subject = $form_subject;
	$mail->Body    = $message;
	$mail->AltBody = strip_tags($message);

	$mail->send();
	echo 'Message has been sent successfully';
} catch (Exception $e) {
	error_log("Mail Error: {$mail->ErrorInfo}");
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
