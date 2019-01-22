

<?php
$conn = mysqli_connect('localhost','root','','datavalue');
if(!$conn){
    alert("database no connected in datashow");
}
$result = "SELECT * FROM datas ORDER BY id DESC";
$show = mysqli_query($conn, $result);
if($show->num_rows > 0){
    
    while($row = $show->fetch_assoc()){
        echo '<figure'.' '.'class='.'"'.'divsclass'.'"'.'>'.'<b>'.$row['uname'].'</b>'.'<figcaption>'.$row['upost'].'</figcaption>'.'</figure>';
    }
}
?>

<html>
<head></head>
    <style>
        figure{
            color: red;
            background-color: aquamarine;
        }
        figcaption{
            color:green;
            padding: 4px;
            font-size: 17px;
            background-color: deepskyblue;
        }
    </style>
<body>

</body>
</html>
