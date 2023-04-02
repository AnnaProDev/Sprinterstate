<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$company = $_POST['company'];
$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$pickup = $_POST['pickup'];
$dropOff = $_POST['dropOff'];
$weight = $_POST['weight'];
$dimensions = $_POST['dimensions'];
$type = $_POST['type'];
$time = $_POST['time'];

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


    //Server settings
   //  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '3060615@gmail.com';                     //SMTP username
    $mail->Password   = 'sdnnvayranpfpnaj';
	 //$mail->SMTPSecure = 'ssl';                                //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
	$mail->setFrom('9132543@gmail.com', 'Sprinterstate');
    $mail->addAddress('3060615@gmail.com', 'Sprinterstate');     //Add a recipient
   //  $mail->addAddress('ellen@example.com');               //Name is optional
   //  $mail->addReplyTo('info@example.com', 'Information');
   //  $mail->addCC('cc@example.com');
   //  $mail->addBCC('bcc@example.com');

    //Attachments
   //  $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
   //  $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
   $mail->isHTML(true);
	                                  //Set email format to HTML
	$mail->Subject = 'Message';
	$mail->Body    = '<h1>User left message <br> for YOU!</h1> </br>
	Company: ' . $company . '<br>
	First name: ' . $FirstName . '<br>
	Last name: ' . $LastName . '<br>
	Phone number: ' . $phone . '<br>
	Email: ' . $email . '<br>
	Pickup: ' . $pickup . '<br>
	Drop Off: ' . $dropOff . '<br>
	Weight: ' . $weight . '<br>
	Dimensions: ' . $dimensions . '<br>
	Type: ' . $type . '<br>
	Time: ' . $time . '';
	if(!$mail->send()) {
		return false;
  } else {
		return true;
  }

?>