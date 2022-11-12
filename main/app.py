#importing libraries
from flask import Flask, jsonify
import sqlite3
import serial

#Creating sqlite database connection and cursor
con = sqlite3.connect("TrashTracer.db")
cur = con.cursor()

app = Flask(__name__)


#sample data
kg_plastic = 1.4
kg_paper = 3
#Co2 Emission Savings
co2_plastic_savings = kg_plastic*2
co2_paper_savings = kg_paper*0.21



while(True):
    #saving values in sqlite
    cur.execute("INSERT INTO plastic VALUE(kg_plastic)")
    con.commit()
    cur.execute("INSERT INTO paper VALUE(kg_paper)")
    con.commit()




















if __name__ == "__main__":
    app.run(debug=True)