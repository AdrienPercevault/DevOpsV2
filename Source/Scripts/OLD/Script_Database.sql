DROP DATABASE IF EXISTS devops;
CREATE DATABASE IF NOT EXISTS devops;

USE devops;

CREATE TABLE IF NOT EXISTS Unit1 ( 
   id int(3)NOT NULL AUTO_INCREMENT,
   idAutomate int(3) NOT NULL, 
   typeAutomate varchar(20) DEFAULT NULL, 
   tempTank float (4,2) DEFAULT NULL, 
   tempExt float(4,2) DEFAULT NULL,
   weightTankMilk float(7,2) DEFAULT NULL,
   weightFinishProduct float (7,2) DEFAULT NULL,
   phMeasurement float (4,2) DEFAULT NULL,
   kpMeasurement int (4) DEFAULT NULL,
   NaCIConcentration float (4,2) DEFAULT NULL,
   bacterialLevelSalmonella int (3) DEFAULT NULL,
   bacterialLevelEColi  int (3) DEFAULT NULL,
   bacterialLevelListeria int (3) DEFAULT NULL,
   PRIMARY KEY(id)
);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (1, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (2, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (3, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (4, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (5, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (6, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (7, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (8, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (9, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);

INSERT INTO Unit1 (idAutomate, typeAutomate, tempTank, tempExt, weightTankMilk, weightFinishProduct, phMeasurement, kpMeasurement, NaCIConcentration, bacterialLevelSalmonella, bacterialLevelEColi, bacterialLevelListeria)
  VALUES (10, "0X0000BA20", 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0, 0, 0);