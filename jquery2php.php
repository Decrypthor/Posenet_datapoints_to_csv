 
<?php 

$variable = $_POST['variable'];
$getfilenames = $_POST['getfilenames'];
$filename = $_POST['filename'];

 

if($getfilenames=="1")
{
    $path = dirname(__FILE__);
    $files = array_diff(scandir($path."\\videos"), array('.', '..'));
    $str="";
    $count=0;
    foreach ($files as &$value) {
        if($count>-1)
            $str=$str.",".basename($path)."\\videos"."\\".$value;
        // else
        //     $str=basename($path)."\\videos"."\\".$value;
        $count++;
    }
    echo $str;
}

if($getfilenames=="0"){
    $fp = fopen($filename.'.csv', 'w');
    fwrite($fp, $variable);
    fclose($fp);
    echo "success";
}
 ?>  
 