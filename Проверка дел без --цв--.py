# -*- coding: utf-8 -*-
import pyodbc
import datetime
import json
import pathlib
import sys

try:
    now = datetime.date.today()
    ty = pathlib.Path().resolve()
    con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};' \
                    r'DBQ='+str(ty)+'\готовое\БАЗА.accdb;'
    conn = pyodbc.connect(con_string)
    cursor = conn.cursor()
    cursor.execute('select * from БД')


    kol = 0
    kolobj = 0
    koljpg = 0
    koljtif = 0
    my_list = []

    with open("Дела без --цв--.txt", "a") as file:
        file.write('----------------------------------------------------- ' +'\n')

    for row in cursor.fetchall():
        try:
            newUrlJpg = row[19].split('#')
            kolobj = kolobj + 1
            if ('цв' in str(newUrlJpg[0])):
                continue
            else:
                if('Номер фонда => ' + str(row[2]) + '; Номер дела => ' + str(row[11]) in  my_list):
                    continue
                else:
                    kol = kol + 1

                    my_list.append('Номер фонда => ' + str(row[2]) + '; Номер дела => ' + str(row[11]))

                    with open("Дела без --цв--.txt", "a") as file:
                        print('Номер фонда => ' + str(row[2]) + '; Номер дела => ' + str(row[11]))
                        file.write('Номер фонда => ' + str(row[2]) + '; Номер дела => ' + str(row[11]) +'\n')


        except:
            print('ERROR')

    with open("Дела без --цв--.txt", "a") as file:
        file.write('----------------------------------------------------- ' +'\n')

    conn.commit()

except Exception as e:
    print("error")
    sys.exit()


