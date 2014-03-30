<?php 

require_once("../../includes/initialize.php");




if($session->is_logged_in()) {
	$session->found_user_page();

	if($session->admin_page){
		//$session->verify_admin_page();
		redirect_to("admin_index.php");	
	}else if($session->faculty_page){
		//$session->verify_faculty_page();
		redirect_to("faculty_index.php");	
	}else if($session->student_page){
		//$session->verify_student_page();
		redirect_to("student_index.php");	
	}
}

$session->session_unsett_verify_register_faculty();

// Remember to give your form's submit tag a name="submit" attribute!
if (isset($_POST['submit'])) { // Form has been submitted.

	$username = trim($_POST['username']);
	$password = trim($_POST['password']); 
	
	// Check database to see if username/password exist.
	$found_user = Admin::authenticate($username, $password);
	if($found_user){
		$admin = true;
		$session->login($found_user);
		$session->verify_admin_page();
		redirect_to("admin_index.php");
	}else {
	$found_user = Faculty::authenticate($username, $password);
		if($found_user){
			$faculty = true;
			$session->login($found_user);
			$session->verify_faculty_page();
			redirect_to("faculty_index.php");
		}
		else {
			$found_user = Student::authenticate($username, $password);
			  if($found_user){
				  $student = true;
				  $session->login($found_user);
				  $session->verify_student_page();
				  redirect_to("student_index.php");
			  }
			  else {
			  	// username/password combo was not found in the database
			   $message1 = "Username/password combination incorrect.";
			  }
		}
	}
} else { // Form has not been submitted.
	  $username = "";
	  $password = "";
	}
	
	if (isset($_POST['register'])) {
		redirect_to("faculty_authenticate.php");
	}
?>


<html>
  <head>
    <title>KG REDDY: Login</title>
    <link href="../stylesheets/login.css" rel="stylesheet" type="text/css" />
    <!--SCRIPTS-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<!--Slider-in icons-->
<script type="text/javascript">
$(document).ready(function() {
	$(".username").focus(function() {
		$(".user-icon").css("left","-48px");
	});
	$(".username").blur(function() {
		$(".user-icon").css("left","0px");
	});
	
	$(".password").focus(function() {
		$(".pass-icon").css("left","-48px");
	});
	$(".password").blur(function() {
		$(".pass-icon").css("left","0px");
	});
});
</script>
  </head>
  
  <body>
   <!--WRAPPER-->
<div id="wrapper">

	<!--SLIDE-IN ICONS-->
    <div class="user-icon"></div>
    <div class="pass-icon"></div>
    <!--END SLIDE-IN ICONS-->
     
        <?php if(isset($message1)){echo output_message($message1);} ?>
		
	<!--LOGIN FORM-->
		<form name="login-form" class="login-form" action="login.php" method="post">
        
        <!--HEADER-->
    <div class="header">
    <!--TITLE--><h1>KGRCET Login</h1><!--END TITLE-->
    <!--DESCRIPTION--><span>Fill out the form below, please enter your Email Id in the place of Username field.</span><!--END DESCRIPTION-->
    </div>
    <!--END HEADER-->
        
		  
          <!--CONTENT-->
    <div class="content">
	<!--USERNAME--><input name="username" type="text" class="input username" value="Username" onfocus="this.value=''" /><!--END USERNAME-->
    <!--PASSWORD--><input name="password" type="password" class="input password" value="Password" onfocus="this.value=''" /><!--END PASSWORD-->
    </div>
    <!--END CONTENT-->
   
   
   <!--FOOTER-->
    <div class="footer">
    <!--LOGIN BUTTON--><input type="submit" name="submit" value="Login" class="button" /><!--END LOGIN BUTTON-->
    <!--REGISTER BUTTON--><div class="areYouFaculty">Faculty?</div><input type="submit" name="register" value="Register" class="register" /><!--END REGISTER BUTTON-->
    </div>
    <!--END FOOTER-->
    </form>
    <!--END LOGIN FORM-->

</div>
<!--END WRAPPER-->

<!--GRADIENT--><div class="gradient"></div><!--END GRADIENT-->

</body>
</html>