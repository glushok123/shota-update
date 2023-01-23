<div class='container'>
    <br>
    <div class='row text-center'>
        <div class='col'>
            <button type="button" class="btn btn-danger">Сбросить таблицу</button>
        </div>
    </div>
    <hr>
    <div class='container'>
        <div class='row text-center'>
            <h2>Распределение дел</h2>
        </div>

        <div class='row text-center'>
            <table class="table table-dark table-striped table-bordered table-sm dataTable" id='data-table'>
                <thead>
                    <tr>
                        <th> Номер дела </th>
                        <th> Группа 1 </th>
                        <th> Группа 2 </th>
                        <th> Группа 3 </th>
                        <th> Группа 4 </th>
                        <th> Группа 5 </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <?php
                        function scandirNew($dir, $sort=0)
                        {
                            $list = scandir($dir, $sort);

                            if (! $list) return false;
                            if ($sort == 0) unset($list[0],$list[1]);
                            else unset($list[count($list)-1], $list[count($list) - 1]);
                            return $list;
                        }

                        $dir = './сюда_кидать';
                        $files1 = scandirNew($dir);

                        foreach ($files1 as $value) {
                            echo '
                                <tr id=' . $value . '>
                                    <td>' . $value . '</td>
                                    <td>
                                        <input class="form-check-input" type="checkbox" value="" id="group-1-' . $value . '">
                                    </td>
                                    <td>
                                        <input class="form-check-input" type="checkbox" value="" id="group-2-' . $value . '">
                                    </td>
                                    <td>
                                        <input class="form-check-input" type="checkbox" value="" id="group-3-' . $value . '">
                                    </td>
                                    <td>
                                        <input class="form-check-input" type="checkbox" value="" id="group-4-' . $value . '">
                                    </td>
                                    <td>
                                        <input class="form-check-input" type="checkbox" value="" id="group-5-' . $value . '">
                                    </td>
                                </tr>
                            ' ;
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</div>