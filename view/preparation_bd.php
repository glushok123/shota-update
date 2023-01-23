
	<div class="container">
		<br>
		<div class="text-center">
			<h1>Индексация файлов из папки "готовое"</h1>
			<hr>
        </div>
	</div>
	<div class="page-wrapper">
		<div class="">
			<div class="">
				<div class="header">
                    <div class="row text-center">
                        <div class='col'>
                            <button id="save_bd" type="button" class="btn btn-success m-1 px-5 radius-30"> Cохранить в БД </button>
                        </div>

                        <div class='col-12'>
                            <hr>
                            <p>Раздел предназначен для записи в БД информации о файлах, которые по какой либо причине оказались в папке "готовое" и не оказались в БД.</p>
                            <p>Переименование файлов недоступно. Только запись в БД.</p>
                        </div>
                        <br>
                    </div>
                    <hr>
                    <div class='container'>
                        <div class="row text-center">
                            <div class='col'>
                                <div class="input-group">
                                    <div class="form-outline">
                                        <input type="search" class="form-control" id='search-dir-name' placeholder='Поиск'/>
                                    </div>
                                </div>
                            </div>
                            <br>
                        </div>
                    </div>

					<hr>
                    <div class='container-fluid'>
                        <?php
                            function getDirContents($dir, &$results = array()) {
                                $files = scandir($dir);

                                foreach ($files as $key => $value) {
                                    $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
                                    if (!is_dir($path)) {
                                        //$results[] = $path;
                                    } else if ($value != "." && $value != "..") {
                                        getDirContents($path, $results);
                                        $results[] = $path;
                                    }
                                }

                                return $results;
                            }
                            $dir = 'готовое/';
                            $filesArrayByNoEnabled = getDirContents($dir);
                            $filesArray = [];

                            foreach($filesArrayByNoEnabled as $folder){
                                $marker = stripos($folder, "готовое");

                                if ($marker) {
                                    $folder = substr($folder, stripos($folder, "готовое"));
                                }
                                if (stripos($folder, 'jpg')){
                                    $filesArray[] = $folder;
                                }
                            }
                        
                            foreach ($filesArray as $value) {
                                $myArray = explode('\\', $value);
                                echo '<button 
                                id="dir-name" 
                                data-v="'.$value.'" 
                                data-number="'.$myArray[count($myArray)-2].'" 
                                data-arh="'.$myArray[1].'" 
                                data-fond="'.$myArray[2].'" 
                                data-opis="'.$myArray[3].'" 
                                type="button" 
                                class="btn btn btn-secondary m-1 px-5 radius-30 search-dir-name">' . $myArray[count($myArray)-2] . '</button>' ;
                            }
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
                                                <input value="" class="form-control" id="abbr_arh_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="l_fonda_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="n_fonda_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="n_opisi_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="l_opisi_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="tom_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="r_sm_db">
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
                                                <input value="" class="form-control" id="name_opis_db">
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r1_db">
                                                    <option selected></option>
                                                    <option value="32.00.00.00. Религия. Церковь. Атеизм.">32.00.00.00. Религия. Церковь. Атеизм.</option>
                                                    <option value="04.00.00.00. Правосудие. Надзор за законностью. Безопасность и охрана правопорядка.">04.00.00.00. Правосудие. Надзор за законностью. Безопасность и охрана правопорядка.</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r2_db">
                                                    <option selected></option>
                                                    <option value="32.02.00.00. Христианство.">32.02.00.00. Христианство.</option>
                                                    <option value="04.03.00.00. Надзор за законностью.">04.03.00.00. Надзор за законностью.</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r3_db">
                                                    <option selected></option>
                                                    <option value="32.00.00.00. Религия. Церковь. Атеизм.">32.02.01.00. Православная церковь.</option>
                                                    <option value="04.03.02.00. Органы и учреждения юстиции.">04.03.02.00. Органы и учреждения юстиции.</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select" aria-label="Default select example" id="r4_db">
                                                    <option selected></option>
                                                    <option value="32.02.01.06. Богослужение, обряды, таинства, праздники в православной церкви.">32.02.01.06. Богослужение, обряды, таинства, праздники в православной церкви.</option>
                                                    <option value="04.03.02.05. Органы ЗАГС (органы регистрации актов гражданского состояния).">04.03.02.05. Органы ЗАГС (органы регистрации актов гражданского состояния).</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="n_dela_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="l_dela_db">
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
                                                <input value="" class="form-control" id="z_ed_x_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="end_data_dela_db">
                                            </td>
                                            <td>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" id="data_n_db">
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" id="data_k_db">
                                                </div>
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="kol_listov_db">
                                            </td>
                                            <td>
                                                <input value="" class="form-control" id="prim_db">
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
															<th>Скан</th>
													</thead>
													<tbody id="example5"> </tbody>
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
<script src="/assets/js/preparation_bd.js"></script>