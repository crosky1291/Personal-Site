<?php

if(isset($_POST['email'])) {
	
  $email_to = "ysanchez3d@gmail.com"; // your email address send TO
  $email_from = "crosky1291@yandrisanchez.com"; // your email address send FROM
  $email_subject = "WEBSITE form message";
	
	
	$full_name = $_POST['name'];
  $email = $_POST['email']; 
  $phone = $_POST['phone'];
  $budget = $_POST['budget'];
	$comments = $_POST['message']; 
		
	$error_message = "";

	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(preg_match($email_exp,$email)==0) {
  	$error_message = 'invalid email';
  } elseif(strlen($full_name) < 2) {
  	$error_message = 'invalid name';
  }
  
  if(strlen($error_message) > 0) {
	   echo ($error_message); die;
  	 died($error_message);
  }

	$email_message = "Form details below.\r\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Full Name: ".clean_string($full_name)."\r\n";
  $email_message .= "Email to reply to: ".clean_string($email)."\r\n";
  $email_message .= "Phone: ".clean_string($phone)."\r\n";
  $email_message .= "Has a Budget of: ".clean_string($budget)."\r\n";
	$email_message .= "Message: ".clean_string($comments)."\r\n";

  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email."\r\n" ;

  mail($email_to, $email_subject, $email_message, $headers);
?>
<?php
}
echo("success");
die();
?>