USE panda_home;
 CREATE TABLE users (
    id BIGINT PRIMARY KEY auto_increment,
    users_name VARCHAR(45) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    email VARCHAR(65) UNIQUE NOT NULL,
    verification_code BIGINT,
    `status` INT,
    id_role BIGINT,
    FOREIGN KEY (id_role)
        REFERENCES `role` (id)
);
CREATE TABLE customers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(10),
    email VARCHAR(65) UNIQUE,
    birthday DATE,
    create_date DATETIME,
    `update-date` DATETIME,
    gender INT,
    id_user BIGINT,
    FOREIGN KEY (id_user)
        REFERENCES users (id)
);
CREATE TABLE product_type (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(60) UNIQUE NOT NULL
);
create table products (
id bigint primary key auto_increment,
`name` varchar(255) not null,
price bigint not null,
`description` text,
create_date datetime,
`update-date` datetime,
image text,
quantity int,
status_delete bit default(0),
product_type bigint,
FOREIGN KEY (product_type) REFERENCEs product_type(id)
);
CREATE TABLE shopping_cart (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    customer_id BIGINT,
    FOREIGN KEY (customer_id)
        REFERENCES customers (id),
    product_id BIGINT,
    FOREIGN KEY (product_id)
        REFERENCES products (id),
        status_delete bit default(0)
);
CREATE TABLE orders (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    customer_id BIGINT,
    FOREIGN KEY (customer_id)
        REFERENCES customers (id),
    create_date DATETIME,
    total_price bigint
);
CREATE TABLE order_detail (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    price BIGINT NOT NULL,
    quantity INT,
    create_date DATETIME,
    `update_time` DATETIME,
    status_delete BIT DEFAULT 0,
    order_id BIGINT,
    FOREIGN KEY (order_id)
        REFERENCES orders (id),
    product_id BIGINT,
    FOREIGN KEY (product_id)
        REFERENCES products (id)
);

