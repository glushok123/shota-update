# -*- coding: utf-8 -*-
import pyodbc
import datetime
import json
import pathlib
import sys


try:
    number_dela = sys.argv[1]

    con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};' \
                 r'DBQ='+str(ty)+'\готовое\БАЗА_1.accdb;'
    conn = pyodbc.connect(con_string)
    cursor = conn.cursor()

    cursor.execute('select * from БД where `Номер дела` = ' + int(number_dela))

    kol = 0
    for row in cursor.fetchall():
        try:
            kol = kol + 1
        except:
            print("error")
except Exception as e:
    print("error")
    sys.exit()

print(str(kol))
