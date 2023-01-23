<?php

$locale='de_DE.UTF-8';
setlocale(LC_ALL,$locale);
putenv('LC_ALL='.$locale);

$text = $_POST["text_main"];
$filename = uniqid(). '.txt';

$filename = "writeInBd/" . uniqid() . ".txt";

if (! file_exists($file)) {
    $fp = fopen($filename, "w"); // ("r" - считывать "w" - создавать "a" - добовлять к тексту),мы создаем файл
    fclose($fp);
}

file_put_contents($filename, $text);

//$output = shell_exec('E:\\OSPanel\\domains\\shota-update\\db_insert.py ' . $filename);
$output = shell_exec( __DIR__ . '\\db_insert.py ' . $filename);

if (trim($output) == 'error'){
    $output = [
        'success' => 'false',
        'text' => '!!! Ошибка при записи в БД, проверьте правильность ввода атрибутов !!!',
    ];
}else{
    $output = [
        'success' => 'true',
        'text' => 'Успешно записано в БД: ' . $output,
    ];
}

echo json_encode($output);