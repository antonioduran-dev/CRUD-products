CREATE DATABASE IF NOT EXISTS productsdb;

USE productsdb;

CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    category VARCHAR(45) DEFAULT NULL,
    price DECIMAL(8,2) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE products;

INSERT INTO products VALUES
    (1, 'doritos', 'botana', 20),
    (2, 'jabon', 'limpieza', 35.50),
    (3, 'jamon', 'carnes', 42.80),
    (4, 'lechuga', 'verduras', 28);