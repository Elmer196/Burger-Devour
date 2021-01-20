CREATE SCHEMA `burgers_db` ;

USE 'burgers_db' ;

CREATE TABLE `burgers_db`.`burgers` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `burger _name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  PRIMARY KEY (`ID`));
