<?
    require_once '../../base/connect.php';

    $kod = 'none';

    if (isset($_POST["kod"])){
        $kod = $_POST["kod"];
    }

    $stm = $dbh->prepare("SELECT * FROM promo_kods where series_id = '" . $kod  . "' and active=1");
    $stm->execute();
    $data = $stm->fetch();

    echo json_encode($data);