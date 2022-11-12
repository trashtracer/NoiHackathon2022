#importing libraries

from flask import Flask, jsonify

#Creating sqlite database connection and cursor

app = Flask(__name__)


#sample data
g_plastic = 0
g_paper = 0
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

async def my_function():
    
    import serial
    import time
    ser = serial.Serial('COM6', 9600, timeout=1)
    time.sleep(2)
    for i in range(50):
        line = ser.readline()   # read a byte
        if line:
            string = line.decode()  # convert the byte string to a unicode string
            txt = string # convert the unicode string to an int
    if txt == "plastic":
        g_plastic = g_plastic + 1
    else:
        g_paper = g_paper + 1

    ser.close()


if __name__ == "__main__":
    app.run(debug=False)



    






