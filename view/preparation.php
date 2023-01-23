
	<div class="container">
		<br>
		<div class="text-center">
			<h1>Подготовка файлов</h1>
            <p>Раздел предназначен для переименования файлов и сохранение в БД информации о файлах (процесс индексации).</p>
            <p>При успешном переименовании и сохранении информации в БД появится уведомление.</p>
			<hr>
        </div>
	</div>
	<div class="page-wrapper">
		<div class="">
			<div class="">
				<div class="header">
                    <div class="row text-center">
                        <div class='col'>
                            <button id="save_1" type="button" class="btn btn-success m-1 px-5 radius-30"> Переименовать и <br>сохранить в БД </button>
                        </div>

                        <div class='col'>
                            <button id="avtoname" type="button" class="btn btn-info m-1 px-5 radius-30">АВТО <br> переименование</button>
                        </div>

                        <br>
                    </div>
                    <hr>
                    <div class="row text-center">
                        <div class='col'>
                            <input type="checkbox" id="scales" name="scales">
                            <label for="scales">ОДНОСТРАНИЧНЫЕ</label>
                        </div>
                        <div class='col'>
                            <div class="input-group">
                                <div class="form-outline">
                                    <input type="search" class="form-control" id='search-dir' placeholder='Поиск'/>
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>
					<hr>
                    <div class='container-fluid'>
                        <?php
                            /*
                            function myscandir($dir, $sort=0)
                            {
                                $list = scandir($dir, $sort);

                                if (! $list) return false;
                                if ($sort == 0) unset($list[0],$list[1]);
                                else unset($list[count($list)-1], $list[count($list) - 1]);
                                return $list;
                            }

                            $dir = 'сюда_кидать';
                            $files1 = myscandir($dir);

                            foreach ($files1 as $value) {
                                echo '<button id="dir" data-v="'.$value.'" type="button" class="btn btn btn-secondary m-1 px-5 radius-30 search-dir">'.$value.'</button>' ;
                            }*/

                            function getDirContentsNews($dir, &$results = array()) {
                                $files = scandir($dir);

                                foreach ($files as $key => $value) {
                                    $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
                                    if (! is_dir($path)) {
                                        //$results[] = $path;
                                    } else if ($value != "." && $value != "..") {
                                        getDirContentsNews($path, $results);
                                        $results[] = $path;
                                    }
                                }

                                return $results;
                            }
                            $dir = 'сюда_кидать/';
                            $filesArrayByNoEnabled = getDirContentsNews($dir);
                            $filesArray = [];

                            foreach($filesArrayByNoEnabled as $folder){
                                $marker = stripos($folder, "сюда_кидать");

                                if ($marker) {
                                    $folder = substr($folder, stripos($folder, "сюда_кидать"));
                                }


                                if (stripos($folder, 'Группа ')){
                                    $myArray = explode('\\', $folder);
                                    if (count($myArray) > 2){
                                        $filesArray[$myArray[1]][] = $folder;
                                    }
                                }
                            }

                            $kolGroup = 0;
                            $textDel = '';
                            foreach ($filesArray as $key => $value) {
                                $kolGroup = $kolGroup + 1;
                                $nameGroup = $key;
                                $classGroup = 'group-del' . $kolGroup;
                                echo('<button type="button" data-init-class="' . $classGroup  . '" class="btn btn-info m-1 px-5 radius-30 init-group">' . $key . '</button>');

                                foreach($value as $item){
                                    $myArray = explode('\\', $item);
                                    $textDel = $textDel . '
                                    <button 
                                        id="dir" 
                                        type="button" 
                                        data-v="' . $item . '"
                                        class="btn btn btn-secondary m-1 px-5 radius-30 search-dir ' . $classGroup  . ' ">' . $myArray[count($myArray) - 1] . '</button>' ;
                                }
                            }
                            echo '<hr>' . $textDel;
                        ?>
                    </div>
						<hr>
						<div class="text-center">
							<h2>Атрибуты</h2> </div>
						<div class="container">
                            <div class='row text-center'>
                                <table class="table table-dark table-striped table-bordered table-sm dataTable">
                                    <tbody>
                                        <tr>
                                            <td> Наз. архива </td>
                                            <td> Литер фонда </td>
                                            <td> Номер фонда </td>
                                            <td> Номер описи </td>
                                            <td> Литер описи </td>
                                            <td> Том описи </td>
                                            <td> Режим скан. </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input value="" class="form-control n_am" id="abbr_arh">
                                            </td>
                                            <td>
                                                <input value="" class="form-control l_fm" id="l_fonda">
                                            </td>
                                            <td>
                                                <input value="" class="form-control n_fm" id="n_fonda">
                                            </td>
                                            <td>
                                                <input value="" class="form-control n_om" id="n_opisi">
                                            </td>
                                            <td>
                                                <input value="" class="form-control l_om" id="l_opisi">
                                            </td>
                                            <td>
                                                <input value="" class="form-control t_om" id="tom">
                                            </td>
                                            <td>
                                                <input value="" class="form-control r_sm">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
						</div>
						<div class="container bd">
                            <div class='row text-center'>
                                <table class="table table-dark table-striped table-bordered dataTable">
                                    <tbody>
                                        <tr>
                                            <td>Наим. описи</td>
                                            <td>Рубрика - уровень1</td>
                                            <td>Рубрика - уровень2</td>
                                            <td>Рубрика - уровень3</td>
                                            <td>Рубрика - уровень4</td>
                                            <td>Номер дела</td>
                                            <td>Литера дела</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input value="" class="form-control" id="name_opis">
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r1">
                                                    <option selected></option>
                                                    <option value="32.00.00.00. Религия. Церковь. Атеизм.">32.00.00.00. Религия. Церковь. Атеизм.</option>
                                                    <option value="04.00.00.00. Правосудие. Надзор за законностью. Безопасность и охрана правопорядка.">04.00.00.00. Правосудие. Надзор за законностью. Безопасность и охрана правопорядка.</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r2">
                                                    <option selected></option>
                                                    <option value="32.02.00.00. Христианство.">32.02.00.00. Христианство.</option>
                                                    <option value="04.03.00.00. Надзор за законностью.">04.03.00.00. Надзор за законностью.</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r3">
                                                    <option selected></option>
                                                    <option value="32.00.00.00. Религия. Церковь. Атеизм.">32.02.01.00. Православная церковь.</option>
                                                    <option value="04.03.02.00. Органы и учреждения юстиции.">04.03.02.00. Органы и учреждения юстиции.</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r4">
                                                    <option selected></option>
                                                    <option value="32.02.01.06. Богослужение, обряды, таинства, праздники в православной церкви.">32.02.01.06. Богослужение, обряды, таинства, праздники в православной церкви.</option>
                                                    <option value="04.03.02.05. Органы ЗАГС (органы регистрации актов гражданского состояния).">04.03.02.05. Органы ЗАГС (органы регистрации актов гражданского состояния).</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="n_dela">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="l_dela">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Заг. ед. хранения </td>
                                            <td>Крайние даты дела</td>
                                            <td>Дата дела начальная</td>
                                            <td>Дата дела конечная</td>
                                            <td>Количество листов</td>
                                            <td>Примечания</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input value="" class="form-control" id="z_ed_x">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="end_data_dela">
                                            </td>
                                            <td>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" id="data_n">
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" id="data_k">
                                                </div>
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="kol_listov">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="prim">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
						</div>
				</div>
                <hr>
				<div class="">
					<div class="row">
						<div class="col">
							<div class="card table-responsive">
								<div class="card-body">
									<div class="card-title">
										<h4 class="mb-0">Сканы</h4> </div>
									<hr>
									<div id="example2_wrapper" class="">
										<div class="row">
											<div class="col-sm-12 table-wrapper-scroll-y my-custom-scrollbar">
												<table id="example2" class="table table-dark table-striped table-bordered dataTable" role="grid" aria-describedby="example2_info">
													<thead style="position: sticky;  top: 0px;">
														<tr role="row">
															<th>Лист</th>
															<th>Название</th>
															<th>Операции</th>
													</thead>
													<tbody id="example4"> </tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="img_show" style="position: sticky; top: 0;"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<script src="/assets/js/preparation.js"></script>