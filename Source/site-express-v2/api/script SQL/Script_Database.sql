DROP DATABASE IF EXISTS devops;
CREATE DATABASE IF NOT EXISTS devops;

USE devops;

CREATE TABLE IF NOT EXISTS Unit1 ( 
   id int(3)NOT NULL AUTO_INCREMENT,
   idAutomate int(3) NOT NULL,
   idUnit int(3) NOT NULL,
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

CREATE TABLE IF NOT EXISTS Unit2 (
   id int(3)NOT NULL AUTO_INCREMENT,
   idAutomate int(3) NOT NULL,
   idUnit int(3) NOT NULL,
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

CREATE TABLE IF NOT EXISTS Unit3 (
   id int(3)NOT NULL AUTO_INCREMENT,
   idAutomate int(3) NOT NULL,
   idUnit int(3) NOT NULL,
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

CREATE TABLE IF NOT EXISTS Unit4 (
   id int(3)NOT NULL AUTO_INCREMENT,
   idAutomate int(3) NOT NULL,
   idUnit int(3) NOT NULL,
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

CREATE TABLE IF NOT EXISTS Unit5 (
   id int(3)NOT NULL AUTO_INCREMENT,
   idAutomate int(3) NOT NULL,
   idUnit int(3) NOT NULL,
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