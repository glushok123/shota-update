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

$output = shell_exec( __DIR__ . '\\db_get_info_by_delo.py ' . $filename);


if (trim($output) == 'error'){
    $output = [
        'success' => 'false',
        'text' => "Ошибка при поиске дела в БД !"
    ];
}else{
    $output = [
        'success' => $output > 0 ? 'false' : 'true',
        'text' => $output > 0 ? "В базе данных найдено записей " . $output . " похожих на это дело!" : "Похожих записей не найдено"
    ];
}

echo json_encode($output);