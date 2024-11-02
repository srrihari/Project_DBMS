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
        organizer_id,
        organizer_name,
        organizer_password,
        organizer_email
    )
VALUES(
        5,
        'Priyajit',
        'Priyajit123',
        'priyajit@gmail.com'
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

DELETE FROM hall;

DROP TABLE hall;

DELETE FROM Hall WHERE hall_id = 1;

ALTER TABLE Booking
DROP FOREIGN KEY booking_ibfk_2;

ALTER TABLE Booking
ADD CONSTRAINT booking_ibfk_2 FOREIGN KEY (hall_id) REFERENCES Hall(hall_id) ON DELETE CASCADE;

INSERT INTO Hall (hall_name, hall_venue, hall_owner, hall_price, hall_accommodation, hall_tags) VALUES
('Chennai Grand Convention Center', 'Nungambakkam', 1, 70000, 400, 'wedding,conference,seminar,AC'),
('Beachside Banquet Hall', 'ECR', 2, 45000, 300, 'wedding,party,reception,AC,Veg'),
('Sky Lounge', 'T Nagar', 3, 85000, 200, 'birthday,party,corporate,NON-AC'),
('Heritage Hall', 'Mylapore', 4, 150000, 250, 'wedding,cultural,AC,Veg'),
('Royal Garden Hall', 'Guindy', 5, 62200, 350, 'wedding,conference,retreat,AC'),
('Lakeview Banquet', 'Adyar', 1, 50000, 180, 'wedding,party,exhibition,AC'),
('Vibrant Plaza', 'Anna Nagar', 2, 66000, 220, 'conference,seminar,meeting,AC'),
('Coastal Pavilion', 'Palavakkam', 3, 28000, 500, 'wedding,party,reception,NON-AC,child-friendly'),
('Starlit Rooftop', 'Kilpauk', 4, 40000, 300, 'birthday,corporate,meeting,NON-AC,Veg'),
('Chennai Celebration Hall', 'Pallavaram', 5, 113000, 150, 'wedding,party,conference,AC');