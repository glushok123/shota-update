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


    cursor.execute('select * from БД where `Аббревиатура названия архива` = ? and `Номер дела` = ? and `Номер описи` = ? and `Литера дела` = ? and `Номер фонда` = ?' , data['abbr_arh'], int(data['n_dela']), int(data['n_opisi']), data['l_dela'], int(data['n_fonda']))

    for row in cursor.fetchall():
        kol = kol + 1

    conn.commit()

except Exception as e:
    print("error")
    sys.exit()

print(str(kol))
