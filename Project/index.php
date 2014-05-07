<?php

if(isset($_POST['update_advisor_info'])){
		echo $_POST['first_name'];
		echo $_POST['last_name'];
	
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>VisioGraphic Resume</title>
		<link rel="shortcut icon" href="images/favicon_final1-20140504-favicon.ico" >
		<link rel="stylesheet" type="text/css" href="stylesheets/main.css"/>
        <script type="text/javascript" src="d3/d3.min.js"></script>
	</head>
	
<body>
	<div id="container">
		
	<header id="header">
		<h1>VisioGraphic Resume</h1>
	</header>
	
	<section id="userInfo" >
		<img src="images/default.png">
		<h2>Surya Kiran Juthuka</h2>
	</section>
	
	<section id="sideBar">
			<div id="buttons">
				<div id="work" class="buttonEducation">Work</div>
				<div id="education" class="buttonWork">Education</div>
			</div>
			<div id="circleDetailsModal"></div>
	</section>
		
	<section id="mainGraph">
		<div id="educationDetails">
			
			<div id="percentageSlider"></div>
			<div id="yearSlider"style="display:none;"></div>
			
			<div id="hexagonContainer">
				<div id="hexTop"></div>
				<div id="hexMiddle"><p>%</p></div>
				<div id="hexBottom"></div>
				<div id="hexLine"></div>
			</div>
			
			<div id="triRecContainer">
				<div id="triRecLine"></div>
				<div id="workTriRecLine"></div>
				<div id="leftTri"></div>
				<div id="educationNameRect" class="bottomShadow"><p></p></div>
				<div id="schoolCircle" class="allShadow"><span>S</span></div>
				<div id="collegeCircle" class="allShadow"><span>C</span></div>
				<div id="universityCircle" class="allShadow"><span>U</span></div>
				<div id="workCircle" class="allShadow"><span>W</span></div>
			</div>
			
			
			<div id="yearToYearContainer">
				<div id="yTyLine"></div>
				<div id="educationSecondYear" class="allShadow"><p></p></div>
				<div id="educationFirstYear" class="allShadow"><p></p></div>
				
				
			</div>
			
			<div id="areaContainer">
				<div id="eCityLine"></div>
				<div id="eCityCrossLine"></div>
				<div id="eCity" class="allShadow"><p></p></div>
				
				<div id="eStateLine"></div>
				<div id="eStateCrossLine"></div>
				<div id="eState" class="allShadow"><p></p></div>
				
				<div id="eCountryLine"></div>
				<div id="eCountryCrossLine"></div>
				<div id="eCountry" class="allShadow"><p></p></div>
			</div>
		</div>
		<div id="yAxisBackground" class="allShadow"></div>
		<div id="cover1axis"></div>
		<div id="cover2axis"></div>
	</section> 
       
    <footer id="footer">
		<h1>&copy;2014  Surya Kiran | Satish Kumar  -  VisoGraphic Resume</h1>
	</footer> 
	
	</div><!--End of Container-->
	
	
	
	
	
	
	
	<input id="button1" type="button" value="Menu-1" language="javascript" onclick="return ClickMenu(this);" />
<input id="button2" type="button" value="Menu-2" language="javascript" onclick="return ClickMenu(this);" />
<input id="button3" type="button" value="Menu-3" language="javascript" onclick="return ClickMenu(this);" />


<form action="index.php"  id="test_test" method="post">
                        <label>First Name: </label>
                        <input type="text" name="first_name" value="hi"/> </br>
                          
                        <label>Last Name: </label>
                        <input id="surya" type="text" name="last_name" value="" /></br>
                    
                        
                        <button name="update_advisor_info" type="submit">Submit Changes</button></br>
                    </form>





	
</body>
</html>

<script type="text/javascript" src="javascripts/VisioGraphicResume.js"></script>