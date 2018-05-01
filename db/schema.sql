DROP DATABASE IF EXISTS 'burgers_db';
CREATE DATABASE 'burgers_db';

USE 'burgers_DB';

CREATE TABLE 'burgerlist'(
    'id' INT(11) AUTO_INCREMENT NOT NULL,
    'burger_name' VARCHAR(60);
    'devoured' BOOLEAN;
);