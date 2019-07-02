#!/usr/bin/python
import json
import mysql.connector as mariadb
import os
from datetime import datetime, timedelta
from os import listdir
from os.path import isfile, join


# Connection to the database devops
cnx = mariadb.connect(
    host="db",
    user="root",
    password="",
    database="devops"
)
# Creation of the cursor to execute sql
cursor = cnx.cursor()

# Get the actual time
actual_time = datetime.now()
# Get the time 1 hour ago
last_hour = actual_time - timedelta(hours = 1)

# Get all the files in the json directory
json_files = [files for files in listdir('/home/Documents/devops_python/json/') if isfile(join('/home/Documents/devops_python/json/', files))]
# Get the number of files in the directory
json_files_number = len(json_files)

# Take all the files from the directory
for j in range(0, 5):
    # Get the date creation of the file
    creation_date = os.stat('/home/Documents/devops_python/json/' + json_files[j]).st_ctime

    # Test if they create date is not too old of 1 hour
    if last_hour <= datetime.fromtimestamp(creation_date) <= actual_time:
        with open("/home/Documents/devops_python/json/" + json_files[j]) as file:
            data = json.load(file)
            # Insert all the element of the json file to the sql database
            for i in range(0, 10):
                number = str(i)
                idAutomate = data[number]["idAutomate"]
                idUnit = data[number]["idUnit"]
                typeAutomate = data[number]["typeAutomate"]
                tempTank = data[number]["tempTank"]
                tempExt = data[number]["tempExt"]
                weightTankMilk = data[number]["weightTankMilk"]
                weightFinishProduct = data[number]["weightFinishProduct"]
                phMeasurement = data[number]["phMeasurement"]
                kpMeasurement = data[number]["kpMeasurement"]
                NaCIConcentration = data[number]["NaCIConcentration"]
                bacterialLevelSalmonella = data[number]["bacterialLevelSalmonella"]
                bacterialLevelEColi = data[number]["bacterialLevelEColi"]
                bacterialLevelListeria = data[number]["bacterialLevelListeria"]

                # Command sql : Insert into unit
                sql = ""
                if idUnit == 1:
                    sql = "INSERT INTO unit1 (idAutomate, idUnit, typeAutomate, tempTank, tempExt, weightTankMilk, " \
                          "weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, " \
                          "bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)" \
                          "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                elif idUnit == 2:
                    sql = "INSERT INTO unit2 (idAutomate, idUnit, typeAutomate, tempTank, tempExt, weightTankMilk, " \
                          "weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, " \
                          "bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)" \
                          "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                elif idUnit == 3:
                    sql = "INSERT INTO unit3 (idAutomate, idUnit, typeAutomate, tempTank, tempExt, weightTankMilk, " \
                          "weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, " \
                          "bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)" \
                          "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                elif idUnit == 4:
                    sql = "INSERT INTO unit4 (idAutomate, idUnit, typeAutomate, tempTank, tempExt, weightTankMilk, " \
                          "weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, " \
                          "bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)" \
                          "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                elif idUnit == 5:
                    sql = "INSERT INTO unit5 (idAutomate, idUnit, typeAutomate, tempTank, tempExt, weightTankMilk, " \
                          "weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, " \
                          "bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)" \
                          "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

                # Values of parameters to update
                val = (idAutomate, idUnit, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct,
                       phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella,
                       bacterialLevelEColi, bacterialLevelListeria)
                # Execute the sql command to update the table with the new values
                cursor.execute(sql, val)
                cnx.commit()

# Close the connection of the database
cnx.close()
