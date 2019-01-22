<?php
    $con= mysqli_connect('localhost','root','');
if(!$con){
    alert("not connected");
}

if(!mysqli_select_db($con,"datavalue")){
    alert("not selected table");
}
$urname= $_POST['uname'];
$urid = $_POST['uid'];
$urpost = $_POST['upost'];
$urcatagory = $_POST['ucatagory'];
$sql = "INSERT INTO datas(uname,uid,upost,ucatagory) VALUES ('$urname','$urid','$urpost','$urcatagory')";

if(!mysqli_query($con,$sql)){
    echo "not inserted";
}

else
    header('Location: chat.html');
?>