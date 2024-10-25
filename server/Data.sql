CREATE DATABASE EVENT;
USE event;
CREATE TABLE Organizer (
    organizer_id INT AUTO_INCREMENT PRIMARY KEY,
    organizer_name VARCHAR(255) NOT NULL,
    organizer_password VARCHAR(255) NOT NULL,
    organizer_email VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE Hall (
    hall_id INT AUTO_INCREMENT PRIMARY KEY,
    hall_name VARCHAR(255) NOT NULL,
    hall_venue VARCHAR(255) NOT NULL,
    hall_owner INT,
    hall_price INT NOT NULL,
    hall_accommodation INT NOT NULL,
    hall_tags VARCHAR(255) NOT NULL,
    FOREIGN KEY (hall_owner) REFERENCES Organizer(organizer_id)
);
CREATE TABLE Customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_password VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL
);
CREATE TABLE Booking (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    hall_id INT,
    booking_date DATE NOT NULL,
    is_confirmed BOOLEAN,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (hall_id) REFERENCES Hall(hall_id)
);
INSERT INTO Organizer
VALUES(
        1,
        'Tharun',
        'Tharun4106',
        'tharun4106@gmail.com'
    );
INSERT INTO Organizer(
        organizer_name,
        organizer_password,
        organizer_email
    )
VALUES(
        'Tharun',
        'Tharun4106',
        'tharun4106@gmail.com'
    );
INSERT INTO Organizer(
        organizer_name,
        organizer_password,
        organizer_email
    )
VALUES(
        'Srri',
        'srri123',
        'srri@icloud.com'
    );
INSERT INTO Hall(
        hall_name,
        hall_venue,
        hall_owner,
        hall_price,
        hall_accommodation,
        hall_tags
    )
VALUES(
        "ViratKohli BottomF Palace",
        "Keelkattalai",
        1,
        60000,
        500,
        "#Non-AC,No Car Parking,Funeral,Party"
    );
INSERT INTO Hall(
        hall_name,
        hall_venue,
        hall_owner,
        hall_price,
        hall_accommodation,
        hall_tags
    )
VALUES(
        "Legend Dhoni Palace",
        "Tambaram",
        1,
        250000,
        2000,
        "#AC,Big Car Parking,CSK Win Party,WC Win Party"
    );
INSERT INTO Hall(
        hall_name,
        hall_venue,
        hall_owner,
        hall_price,
        hall_accommodation,
        hall_tags
    )
VALUES(
        "Das Kalyana Mahal",
        "Keelkattalai",
        1,
        180000,
        2500,
        "#AC,Big Car Parking, Wedding"
    );
INSERT INTO Customer
VALUES(1, "Priyajit", "priya", "priya@gmail.com")
INSERT INTO Booking
VALUES(1, 1, 1, "2024-11-09", 1)
select *
from Customer;
DROP TABLE customer;
DROP DATABASE EVENT;