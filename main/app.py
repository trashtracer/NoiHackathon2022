#importing libraries
from flask import Flask, jsonify
import sqlite3
import serial

#Creating sqlite database connection and cursor
con = sqlite3.connect("TrashTracer.db")
cur = con.cursor()

app = Flask(__name__)

cur.execute("CREATE TABLE Data")






if __name__ == "__main__":
    app.run(debug=True)