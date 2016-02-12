CREATE DATABASE burgers_db;

CRETATE TABLE burgers (
	id int AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50),
	devoured BOOLEAN,
	date TIMESTAMP
);