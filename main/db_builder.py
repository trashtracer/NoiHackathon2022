#importing libraries
import sqlite3
import time
import serial
from flask import Flask, jsonify

#Creating sqlite database connection and cursor
con = sqlite3.connect("TrashTracer.db")
cur = con.cursor()

app = Flask(__name__)

cur.execute("CREATE TABLE plastic(weight)")
time.sleep(2)
cur.execute("CREATE TABLE paper(weight)")