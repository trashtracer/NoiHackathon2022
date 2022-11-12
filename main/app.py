#importing libraries
import sqlite3

import serial
from flask import Flask, jsonify

#Creating sqlite database connection and cursor
con = sqlite3.connect("TrashTracer.db")
cur = con.cursor()

app = Flask(__name__)


#sample data
g_plastic = 1400
g_paper = 3000
str_g_plastic = str(g_plastic)
str_g_paper = str(g_paper)


#Co2 Emission Savings
co2_plastic_savings = g_plastic*2
co2_paper_savings = g_paper*0.21

cur.executemany("INSERT INTO plastic VALUES (?);", str_g_plastic)
cur.executemany("INSERT INTO paper VALUES (?);", str_g_paper)
con.commit()

if __name__ == "__main__":
    app.run(debug=True)

while(True):
    #saving values in sqlite
    cur.executemany("UPDATE plastic SET weight = (?);", str_g_plastic)
    cur.executemany("UPDATE paper SET weight = (?);", str_g_paper)

    plastic = [{
        "value1":"cur.executemany(SELECT weight FROM plastic)",
    },
    {
        "value2":co2_plastic_savings
    }]
    
    paper = [{
        "value1":"cur.executemany(SELECT weight FROM paper)",
    },
    {
        "value2":co2_paper_savings
    }]

    @app.route("/api/v1/plastic/weight" ,methods=["GET"])
    def get_plastic_weight():
        return jsonify({"value1":plastic})
    

    @app.route("/api/v1/plastic/co2" ,methods=["GET"])
    def get_plastic_co2():
        return jsonify({"value2":plastic})

    @app.route("/api/v1/paper/weight" ,methods=["GET"])
    def get_paper_weight():
        return jsonify({"value1":paper})

    @app.route("/api/v1/paper/co2" ,methods=["GET"])
    def get_paper_co2():
        return({"value2":paper})

