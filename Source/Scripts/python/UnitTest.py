import mysql.connector
import unittest


# Connection to the database DevOps
cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="devops"
)
# Creation of the cursor to execute sql
cursor = cnx.cursor()

# Select one TempTank's value from unit 1
sql1: str = "SELECT tempTank FROM Unit1 WHERE id = 1"
cursor.execute(sql1)
result1 = str(cursor.fetchall())
result1 = float(result1.replace('[', '').replace('(', '').replace(',', '').replace(')', '').replace(']', ''))

# Select one weightTankMilk's value from unit 2
sql2: str = "SELECT weightTankMilk FROM Unit2 WHERE id = 1"
cursor.execute(sql2)
result2 = str(cursor.fetchall())
result2 = float(result2.replace('[', '').replace('(', '').replace(',', '').replace(')', '').replace(']', ''))

# Select one phMeasurement's value from unit 3
sql3: str = "SELECT phMeasurement FROM Unit3 WHERE id = 1"
cursor.execute(sql3)
result3 = str(cursor.fetchall())
result3 = float(result3.replace('[', '').replace('(', '').replace(',', '').replace(')', '').replace(']', ''))

# Select one NaCIConcentration's value from unit 4
sql4: str = "SELECT NaCIConcentration FROM Unit4 WHERE id = 1"
cursor.execute(sql4)
result4 = str(cursor.fetchall())
result4 = float(result4.replace('[', '').replace('(', '').replace(',', '').replace(')', '').replace(']', ''))

# Select one bacterialLevelListeria's value from unit 5
sql5: str = "SELECT bacterialLevelListeria FROM Unit5 WHERE id = 1"
cursor.execute(sql5)
result5 = str(cursor.fetchall())
result5 = int(result5.replace('[', '').replace('(', '').replace(',', '').replace(')', '').replace(']', ''))

cnx.close()


# Class for the test of the 5 sql request
class UnitTestClass(unittest.TestCase):

    def testSQL1(self):
        self.assertGreater(result1, 2.5)
        self.assertLess(result1, 4.0)

    def testSQL2(self):
        self.assertGreater(result2, 3512)
        self.assertLess(result2, 4607)

    def testSQL3(self):
        self.assertGreater(result3, 6.8)
        self.assertLess(result3, 7.2)

    def testSQL4(self):
        self.assertGreater(result4, 1.0)
        self.assertLess(result4, 1.7)

    def testSQL5(self):
        self.assertGreater(result5, 28)
        self.assertLess(result5, 54)


# Launch the test
unittest.main()
