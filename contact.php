<?php

if(isset($_POST['email'])) {
	
$email_to = "ysanchez3d@gmail.com"; // your email address send TO
$email_from = "crosky1291@yandrisanchez.com"; // your email address send FROM
$email_subject = "WEBSITE form message";
$thankyou = "index.html";

	function died($error) {
		echo "Sorry, but there were error(s) found with the form you submitted. ";
		echo "These errors appear below.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	if(!isset($_POST['name']) ||
		!isset($_POST['email']) 	
		) {
		died('Sorry, there appears to be a problem with your form submission.');		
	}
	
	
	$full_name = $_POST['name'];
  $email = $_POST['email']; 
  $phone = $_POST['phone'];
  $budget = $_POST['budget'];
	$comments = $_POST['text-area']; 
		
	$error_message = "";
	
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(preg_match($email_exp,$email)==0) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
  if(strlen($full_name) < 2) {
  	$error_message .= 'Name field is not correct. Please try another Name.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'Please enter your message.<br />';
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
<script>alert("Thanks for the info I will get back to you as soon as I can!")</script>
<script>location.replace('<?php echo $thankyou;?>')</script>
<?php
}
die();
?>