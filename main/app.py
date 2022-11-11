#importing libraries
from flask import Flask, jsonify
import sqlite3
import serial

#Creating sqlite database connection and cursor
con = sqlite3.connect("TrashTracer.db")
cur = con.cursor()

app = Flask(__name__)


kg_plastic = 1.3
kg_paper = 3
co2_plastic_savings = kg_plastic*2
co2_paper_savings = kg_paper*0.21
#cur.execute("INSERT INTO Data(kg_plastic, kg_paper)")



if __name__ == "__main__":
    app.run(debug=True)