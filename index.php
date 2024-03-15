<?php
//not for you sufi
$lnkData = file_get_contents("./main.lnk");
if(strpos($lnkData, "L\x00\x00\x00") !== 0)
{
    echo "Not valid link file";
    exit;
}

$data = unpack("V1headerSize/H16CLSID", $lnkData);

d($data);