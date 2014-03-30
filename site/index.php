<?php

echo time();

require_once("../includes/initialize.php");

if(isset($database)){
	echo "true";
}
else echo "false";

echo "</br>";

echo "hi's PHP i am going to work on you nw..!</br>";

echo $database->escape_value("hi's PHP i am going to work on you nw..!</br>");

/*$sql =  "INSERT INTO admin (id,name,email,password,isAdmin,isActive)";
$sql .= " VALUES (2, 'ADMIN2', 'admin2@kgr.ac.in', 'AdminCollegeKGRCET', 1, 1)";

$result = $database->query($sql);
*/
/*$Result_set=Faculty::find_all();

echo $Result_set['name'];*/


 //Dynamic retrival of admin objects:
echo "<hr/>";

$admin = Admin::find_by_id(2);
echo $admin->name;

echo "<hr/>";

$admins = Admin::find_all();
foreach($admins as $admin) {
	echo "ADMIN NAME:  " . $admin->name . "<br/>";
	echo "ADMIN EMAILID:  " . $admin->email . "<br/>";
	echo "ADMIN PASSWORD:  " . $admin->password . "<br/><hr/>";	
}



?>
