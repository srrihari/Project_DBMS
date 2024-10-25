const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const handleError = (err, results, response, handler, status = 500) => {
  if (err) {
    console.log(`ERROR: ${err.message}`);
    response.sendStatus(status);
  }
  handler(results);
};

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed", err.stack);
    return;
  }
  console.log("Connected to Database");
});
console.log("Tharun");

app.get("/", (req, res) => {
  const query =
    "SELECT * FROM Hall" +
    (req.query.id ? ` where hall_id = ${req.query.id}` : "");
  // console.log(query);

  db.query(query, (err, results) =>
    handleError(
      err,
      results,
      res,
      (results) => {
        // console.log("Hall Data:", results);
        res.json(req.query.id ? results[0] : results);
      },
      500
    )
  );
});

app.get("/booking", (req, res) => {
  const query = `SELECT booking_date, is_confirmed, hall_name,hall_tags FROM BOOKING, hall where customer_id = ${req.query.id} and hall.hall_id = booking.hall_id`;

  db.query(query, (err, results) =>
    handleError(
      err,
      results,
      res,
      (results) => {
        res.json(results);
      },
      500
    )
  );
});

app.post("/Login", async (req, res) => {
  const { password, email } = req.body;

  db.query(
    "SELECT customer_id, customer_password FROM CUSTOMER WHERE customer_email = ?",
    [email],
    async (err, result) => {
      if (err) {
        console.log(`ERROR: ${err.message}`);
        return res.sendStatus(500);
      }

      if (result.length === 0) {
        res.json({
          isMatch: false,
          cid: undefined,
          message: "Invalid Username.",
        });
        return;
      }

      const hashedPassword = result[0].customer_password;

      const isMatch = await bcrypt.compare(password, hashedPassword);
      res.json({
        isMatch,
        cid: isMatch ? result[0].customer_id : undefined,
        message: isMatch ? "Valid" : "Invalid Password.",
      });
    }
  );
});

app.post("/register", async (req, res) => {
  const bookDate = new Date();
  const { username, password, email, hallID } = req.body;
  // console.log(req.body);
  const hashedPassword = await bcrypt.hash(password, 4);
  const query = `INSERT INTO Customer(customer_name,customer_password,customer_email) VALUES (?,?,?)`;

  db.query(query, [username, hashedPassword, email], (err, q1res) => {
    if (err) {
      console.log(`ERROR:${err.message}`);
      res.sendStatus(500);
    }

    db.query(
      "SELECT customer_id from CUSTOMER WHERE customer_name = ?",
      [username],
      (err, q2res) => {
        if (err) {
          console.log(`ERROR:${err.message}`);
          res.sendStatus(500);
        }

        db.query(
          "SELECT count(*) as 'booking_count' from booking WHERE hall_id = ? AND DATE(booking_date) = DATE(?)",
          [hallID, bookDate],
          (err, q3res) => {
            if (err) {
              console.log(`ERROR:${err.message}`);
              res.sendStatus(500);
            }

            db.query(
              "INSERT INTO Booking(customer_id,hall_id,booking_date,is_confirmed) VALUES (?,?,?,?)",
              [
                q2res[0].customer_id,
                hallID,
                bookDate,
                q3res[0].booking_count == 0,
              ],
              (err, _) => {
                if (err) {
                  console.log(`ERROR:${err.message}`);
                  res.sendStatus(500);
                } else res.sendStatus(200);
              }
            );
          }
        );
      }
    );
  });

  //db.query(query2, [, hallID, bookDate, 0], (err, res) => {});
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
