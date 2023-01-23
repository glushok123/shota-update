<?php


$files = $_POST["file"];
$name_opis = $_POST["no"];
$url = $_POST["url"];
$p = "";

if (!file_exists('готовое/'.$url)) {
    mkdir('готовое/'.$url, 0777, true);
}

foreach ($files as $key => $value) {
    $arr1 = explode('/', $key);
    $newarray = array_slice($arr1, 1, -1);
    $put = "";
    foreach ($newarray as $value2){
      $put = $put.$value2;
      $p = $put;
    }

    copy($key, 'готовое/'.$url."/".$value);
}

