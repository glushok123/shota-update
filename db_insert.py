# -*- coding: utf-8 -*-
import pyodbc
import datetime
import json
import pathlib
import sys


try:
    who = sys.argv[1]
    now = datetime.date.today()
    ty = pathlib.Path().resolve()
    f = open(who, 'r', encoding='utf-8')
    file_contents = f.read()
    data = json.loads(file_contents)
    kol = 0

    con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};' \
                 r'DBQ='+str(ty)+'\готовое\БАЗА.accdb;'
    conn = pyodbc.connect(con_string)
    cursor = conn.cursor()

    for item in data["files"]:
        params = (
            data['abbr_arh'],
            data['l_fonda'],
            int(data['n_fonda']),
            int(data['n_opisi']),
            data['l_opisi'],
            data['tom'],
            data['name_opis'],
            data['r1'],
            data['r2'],
            data['r3'],
            data['r4'],
            int(data['n_dela']),
            data['l_dela'],
            data['z_ed_x'],
            data['end_data_dela'],
            datetime.datetime.strptime(data['data_n'], "%Y-%m-%d"),
            datetime.datetime.strptime(data['data_k'], "%Y-%m-%d"),
            int(data['kol_listov']),
            int(data['kol_f1']),
            item['f1'],
            int(data['kol_f2']),
            item['f2'],
            data['prim'],
            now)

        cursor.execute('INSERT INTO БД (`Аббревиатура названия архива`, `Литера фонда`, `Номер фонда`, `Номер описи`, `Литера описи`, `Том`, `Наименование описи`, `Рубрика - уровень1`, `Рубрика - уровень2`, `Рубрика - уровень3`, `Рубрика - уровень4`, `Номер дела`, `Литера дела`, `Заголовок единицы хранения`, `Крайние даты дела`, `Дата дела начальная`,  `Дата дела конечная`, `Количество листов`, `Количество файлов электронных копий в папке «№ листов описей»`, `Файлы электронных копий документа в папке «№ листов описей»`, `Количество файлов электронных копий в папке «Обработанные копии»`, `Файлы электронных копий документа в папке «Обработанные копии»`, `Примечания`, `Дата заполнения`) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',params)
        conn.commit()
        kol = kol + 1

except Exception as e:
    print("error")
    sys.exit()

print(str(kol))
