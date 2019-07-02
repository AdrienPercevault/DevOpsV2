import random


# Class automate
class Automate:

    # Definition of the parameter of an automate
    typeAutomate: str = "0X0000BA20"
    tempTank: float = 0.0
    tempExt: float = 0.0
    weightTankMilk: float = 0.0
    weightFinishProduct: float = 0.0
    phMeasurement: float = 0.0
    kpMeasurement: int = 0
    NaCIConcentration: float = 0.0
    bacterialLevelSalmonella: int = 0
    bacterialLevelEColi: int = 0
    bacterialLevelListeria: int = 0

    # Constructor
    # Initialize all the parameter with random values
    def __init__(self):
        global tempTank
        self.tempTank = round(random.uniform(2.5, 4.0), 2)
        # print(tempTank)
        global tempExt
        self.tempExt = round(random.uniform(8.0, 14.0), 2)
        # print(tempExt)
        global weightTankMilk
        self.weightTankMilk = round(random.uniform(3512, 4607))
        # print(weightTankMilk)
        global phMeasurement
        self.phMeasurement = round(random.uniform(6.8, 7.2), 1)
        # print(phMeasurement)
        global kpMeasurement
        self.kpMeasurement = random.randint(35, 47)
        # print(kpMeasurement)
        global NaCIConcentration
        self.NaCIConcentration = round(random.uniform(1.0, 1.7), 1)
        # print(NaCIConcentration)
        global bacterialLevelSalmonella
        self.bacterialLevelSalmonella = random.randint(17, 37)
        # print(bacterialLevelSalmonella)
        global bacterialLevelEColi
        self.bacterialLevelEColi = random.randint(35, 49)
        # print(bacterialLevelEColi)
        global bacterialLevelListeria
        self.bacterialLevelListeria = random.randint(28, 54)
        # print(bacterialLevelListeria)


# test = Automate()
# print(test.tempTank)
