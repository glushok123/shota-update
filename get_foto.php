<?php

$dir = $_POST["dir"];

$path = $_POST["dir"];
$directory = new \RecursiveDirectoryIterator($path);
$iterator = new \RecursiveIteratorIterator($directory);
$files = array();
$bad = 0;
$ok = 0;

$textfoto = '';
$prov = 0;

foreach ($iterator as $info) {
    if (strpos($info->getPathname(), "JPG")){
      $name = str_replace('\\','/',$info->getPathname());
      if ($prov == 0)
      {
          $textfoto = $textfoto.'{"name":"'.$name.'"}';
      }
      else{
          $textfoto = $textfoto.',{"name":"'.$name.'"}';
      }
      $prov = $prov + 1;
    }

    if (strpos($info->getPathname(), "jpg")){
      $name = str_replace('\\','/',$info->getPathname());
      if ($prov == 0)
      {
          $textfoto = $textfoto.'{"name":"'.$name.'"}';
      }
      else{
          $textfoto = $textfoto.',{"name":"'.$name.'"}';
      }
      $prov = $prov + 1;
    }

    if (strpos($info->getPathname(), "JPEG")){
      $name = str_replace('\\','/',$info->getPathname());
      if ($prov == 0)
      {
          $textfoto = $textfoto.'{"name":"'.$name.'"}';
      }
      else{
          $textfoto = $textfoto.',{"name":"'.$name.'"}';
      }
      $prov = $prov + 1;
    }

    if (strpos($info->getPathname(), "jpeg")){
      $name = str_replace('\\','/',$info->getPathname());
      if ($prov == 0)
      {
          $textfoto = $textfoto.'{"name":"'.$name.'"}';
      }
      else{
          $textfoto = $textfoto.',{"name":"'.$name.'"}';
      }
      $prov = $prov + 1;
    }
}

$json = '{
    "foto":[
        '.$textfoto.'
    ]
}';

echo($json);
