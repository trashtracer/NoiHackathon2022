#importing libraries


import serial
from flask import Flask, jsonify

#Creating sqlite database connection and cursor

app = Flask(__name__)


#sample data
g_plastic = 1400
g_paper = 3000
str_g_plastic = str(g_plastic)
str_g_paper = str(g_paper)


#Co2 Emission Savings
co2_plastic_savings = g_plastic*2
co2_paper_savings = g_paper*0.21



plastic = [{
    "pl_recycle_weight":g_plastic
},    
{
    "pl_co2":co2_plastic_savings
}]
    
paper = [{
    "pa_recycle_weight":g_paper
},  
{
    "pa_co2":co2_paper_savings
}]

@app.route("/" ,methods=["GET"])
def get_helo():
    print("'sup")

@app.route("/api/v1/plastic/weight" ,methods=["GET"])
def get_pl_w():
    return jsonify({"pl_w":plastic})
    

@app.route("/api/v1/plastic/co2" ,methods=["GET"])
def get_pl_c():
    return jsonify({"pl_co2":plastic})

@app.route("/api/v1/paper/weight" ,methods=["GET"])
def get_pa_w():
    return jsonify({"pa_recycle_weight":paper})

@app.route("/api/v1/paper/co2" ,methods=["GET"])
def get_pa_cp():
    return jsonify({"pa_co2":paper})
    

if __name__ == "__main__":
    app.run(debug=True)