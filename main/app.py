#importing libraries
import sqlite3
import time
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
time.sleep(2)
cur.executemany("INSERT INTO paper VALUES (?);", str_g_paper)
con.commit()



while(True):
    #saving values in sqlite
    cur.executemany("UPDATE plastic SET weight = (?);", str_g_plastic)
    time.sleep(2)
    cur.executemany("UPDATE paper SET weight = (?);", str_g_paper)

    plastic = [{
        "value1":"cur.executemany(SELECT weight FROM plastic)",
    },
    {
        "value2":co2_plastic_savings
    }]
    time.sleep(2)
    paper = [{
        "value1":"cur.executemany(SELECT weight FROM paper)",
    },
    {
        "value2":co2_paper_savings
    }]
    time.sleep(2)
    @app.route("/" ,methods=["GET"])
    def get_helo():
        print("'sup")
    time.sleep(2)
    @app.route("/api/v1/plastic/weight" ,methods=["GET"])
    def get_pl_w():
        return jsonify({"value1":plastic})
    time.sleep(2)
    @app.route("/api/v1/plastic/co2" ,methods=["GET"])
    def get_pl_c():
        return jsonify({"value2":plastic})
    time.sleep(2)
    @app.route("/api/v1/paper/weight" ,methods=["GET"])
    def get_pa_w():
        return jsonify({"value1":paper})
    time.sleep(2)
    @app.route("/api/v1/paper/co2" ,methods=["GET"])
    def get_pa_cp():
        return jsonify({"value2":paper})
    

    if __name__ == "__main__":
        app.run(debug=True)