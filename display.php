
<!doctype html>
<html>
<head>
<title>PHP, SQL, and MySQL</title>
</head>
<body>
<h1>PHP, SQL, and MySQL</h1>
php
$connect = mysqli_connect( 'sql12.freesqldatabase.com', 'sql12619500', '2mCcqQjVZh', 'sql12619500');

$query = 'SELECT officeNumber, officeName, employeeName FROM TABLE1';
$result = mysqli_query($connect, $query );
echo mysqli_num_rows( $result );


</body>
</html>