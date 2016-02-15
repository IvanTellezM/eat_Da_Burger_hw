CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	ID int AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY(ID)
);