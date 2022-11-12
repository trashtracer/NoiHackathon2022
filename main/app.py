#importing libraries


import serial
from flask import Flask, jsonify

#Creating sqlite database connection and cursor

app = Flask(__name__)


#sample data
g_plastic = 63
g_paper = 275
str_g_plastic = str(g_plastic)
str_g_paper = str(g_paper)


plastic = [{
    "pl_recycle_weight":g_plastic
}]
    
paper = [{
    "pa_recycle_weight":g_paper
}]



@app.route("/api/v1/plastic/weight" ,methods=["GET"])
def get_pl_w():
    return jsonify({"pl_w":plastic})
    
@app.route("/api/v1/paper/weight" ,methods=["GET"])
def get_pa_w():
    return jsonify({"pa_recycle_weight":paper})


if __name__ == "__main__":
    app.run(debug=True)