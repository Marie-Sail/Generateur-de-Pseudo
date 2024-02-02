-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null
-- );

CREATE DATABASE IF NOT EXISTS `checkpoint4`;

USE `checkpoint4`;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`word` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `word` VARCHAR(50) NOT NULL UNIQUE,
        `type` VARCHAR(50) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;


-- insert into checkpoint4.word (word, type) values ("Hippopotame","subject");
-- insert into checkpoint4.word (word, type) values ("Suricate","subject");
-- insert into checkpoint4.word (word, type) values ("Saphire","subject");
-- insert into checkpoint4.word (word, type) values ("Cobalt","subject");
-- insert into checkpoint4.word (word, type) values ("Lapin","subject");

-- insert into checkpoint4.word (word, type) values ("Vaillant","adjective");
-- insert into checkpoint4.word (word, type) values ("Dynamique","adjective");
-- insert into checkpoint4.word (word, type) values ("Vert","adjective");
-- insert into checkpoint4.word (word, type) values ("Sexy","adjective");
-- insert into checkpoint4.word (word, type) values ("Furtif","adjective");
