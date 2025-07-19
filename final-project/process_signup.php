<?php
session_start();

// Simulate storing user information (e.g., in a database)
$_SESSION['user_logged_in'] = true;
$_SESSION['user_name'] = $_POST['name'];
$_SESSION['user_email'] = $_POST['email'];

// Redirect to the homepage or restricted content
header("Location: index.html");
exit();
?>
