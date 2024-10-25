import mysql.connector

# Establish the connection to the database
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="dbms",
    database="sakila"
)

# Create a cursor object to interact with the database
cur = conn.cursor()

# Execute the query to show databases
cur.execute("SHOW DATABASES;")

# Fetch all the results
databases = cur.fetchall()

# Print the results
for db in databases:
    print(db)

# Close the cursor and connection
cur.close()
conn.close()