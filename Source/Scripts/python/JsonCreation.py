import json
import random
from datetime import datetime


# Declaration of the unit number
unit_number = 1
# Declaration of the number of Automate to create
number_automate = 10
# Declaration of a table of with all the automates
table_automates = {}
# Declaration of the type of the automate
type_automate = ""

# Generation of all the automate for production unity
for i in range(0, number_automate):

    # Set the type of automate for all the automate
    number = str(i)
    type_automate = "0X0000BA2" + number

    # Create one automate with random values for each parameters
    table_automates[i] = {
        'idAutomate': i,
        'idUnit': unit_number,
        'typeAutomate': type_automate,
        'tempTank': round(random.uniform(2.5, 4.0), 2),
        'tempExt': round(random.uniform(8.0, 14.0), 2),
        'weightTankMilk': round(random.uniform(3512, 4607)),
        'weightFinishProduct': (round(random.uniform(3512, 4607)) - round(random.uniform(3512, 4607))),
        'phMeasurement': round(random.uniform(6.8, 7.2), 1),
        'kpMeasurement': random.randint(35, 47),
        'NaCIConcentration': round(random.uniform(1.0, 1.7), 1),
        'bacterialLevelSalmonella': random.randint(17, 37),
        'bacterialLevelEColi': random.randint(35, 49),
        'bacterialLevelListeria': random.randint(28, 54)
    }

# Make the name of the json the actual time
json_name = str(datetime.now().timestamp())
# .strftime('%Y_%m_%d %Hh-%Mm-%Ss'))

print(json_name)
# Creation of the json with the data of all the automate generated
with open('../json/' + json_name + '.json', 'w') as json_file:
    json.dump(table_automates, json_file, indent=4)
