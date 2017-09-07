
<?php

// check variables

$hidden = $_POST['hidden'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$age = $_POST['age'];
$type = $_POST['type'];
$medium = $_POST['medium'];
$address = $_POST['address'];
$include = $_POST['include'];
$contact = $_POST['contact'];
$week = $_POST['week'];

// add date form was submitted

$date = gmdate("M d Y");

// thank the user for submitting the form

print "<p>Thank you, $firstname $lastname! I will be in touch with you soon.</p>";
print "$date";

// send data to specific email address

$to = "kyle.vanderhoeven@gmail.com";
$subject = "Commission Request Form";
$body = " Date: $date \n Form Request: $hidden \n First Name: $firstname \n Last Name: $lastname \n Age: $age \n Commission Requested: $type \n Medium Requested: $medium1 $medium2 $medium3 $medium4 $medium5 \n Address: $address \n Preferred Method of Contact: $contact \n Days of the week: $week[0] $week[1] $week[2] $week[3] $week[4] $week[5] $week[6] \n Additional Details Requested: $include \n\n";
mail($to, $subject, $body);

?>

