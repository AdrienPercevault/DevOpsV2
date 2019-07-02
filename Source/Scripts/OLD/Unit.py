from Automate import *
import mysql.connector


# Class unit
class Unit:
    automates = []
    nbAutomate: int = 0

    # Constructor
    def __init__(self):
        # Connection to the database devops
        cnx = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="devops"
        )

        # Creation of the cursor to execute sql
        cursor = cnx.cursor()

        # Implementation of global variable
        global nbAutomate
        nbAutomate = 10
        global automates
        automates = [None] * nbAutomate

        # Update of all the automates
        for i in range(0, nbAutomate):
            # Create all the automates
            auto = Automate()

            # Set the type of automate for all the automate
            number = str(i)
            auto.typeAutomate = "0X0000BA2" + number

            # Add all the automates to a table
            automates[i] = auto

            # Command sql
            sql = "UPDATE unit1 SET typeAutomate = %s, tempTank = %s, tempExt = %s, " \
                  "weightTankMilk = %s, weightFinishProduct = %s, phMeasurement = %s, " \
                  "kpMeasurement = %s, NaCIConcentration = %s, bacterialLevelSalmonella = %s, " \
                  "bacterialLevelEColi = %s, bacterialLevelListeria = %s WHERE idAutomate = %s"

            # Values of parameters to update
            val = (auto.typeAutomate, auto.tempTank, auto.tempExt, auto.weightTankMilk, auto.weightFinishProduct,
                   auto.phMeasurement, auto.kpMeasurement, auto.NaCIConcentration, auto.bacterialLevelSalmonella,
                   auto.bacterialLevelEColi, auto.bacterialLevelListeria, i + 1)

            # Execute the sql command to update the table with the new values
            cursor.execute(sql, val)
            cnx.commit()

        # Close the connection of the database
        cnx.close()


test = Unit()
