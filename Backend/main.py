# Import joblib to load models generate in collab
from joblib import load
# Import apifast to create api rest
from fastapi import Request, FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import sklearn
from array import array
import numpy as np
import pandas as pd
from pyper import *
import json

# Create simple api rest
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model price cost cars


@app.post("/model1_autos")
async def model1Predict(input1: str = Form(...), input2: str = Form(...), input3: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    input3 = float(input3)
    r = R(use_pandas=True)
    model_rds_path = "Models\\autos.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'Selling_Price': [input1],
                 'Kms_Driven': [input2], 'Year': [input3]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}

# Model tiempo web


@app.post("/model2_tiempoWeb")
async def model1Predict(input1: str = Form(...), input2: str = Form(...), input3: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    input3 = float(input3)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_tiempoWeb.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'purchased': [input1],
                 'added_in_cart': [input2], 'checked_out': [input3]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}


# Model grease

@app.post("/model3_grease")
async def model1Predict(input1: str = Form(...), input2: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_grasa.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'Density': [input1],
                 'Abdomen': [input2]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}

# Model stock


@app.post("/model4_stock")
async def model1Predict(input1: str = Form(...), input2: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_Stock.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'open': [input1],
                 'high': [input2]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}


# Model VideoGame


@app.post("/model5_VideoGame")
async def model1Predict(input1: str = Form(...), input2: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_VideoJuego.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'total_traders': [input1],
                 'total_comments': [input2]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}


# Model insuranceBMI
@app.post("/model6_insuranceBMI")
async def model1Predict(input1: str = Form(...)):
    input1 = float(input1)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_segurosbmi.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'charges': [input1]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}


# Model MinTemp
@app.post("/model7_MinTemp")
async def model1Predict(input1: str = Form(...), input2: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_MinTemp.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'MaxTemp': [input1], 'Temp9am': [input2]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}

# Model Avocado


@app.post("/model8_Avocado")
async def model1Predict(input1: str = Form(...), input2: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_aguacate.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'Total.Volume': [input1], 'X4046': [input2]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}


# Model Energy
@app.post("/model9_energy")
async def model1Predict(input1: str = Form(...), input2: str = Form(...), input3: str = Form(...),
                        input4: str = Form(...), input5: str = Form(...), input6: str = Form(...),
                        input7: str = Form(...), input8: str = Form(...), input9: str = Form(...),
                        input10: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    input3 = float(input3)
    input4 = float(input4)
    input5 = float(input5)
    input6 = float(input6)
    input7 = float(input7)
    input8 = float(input8)
    input9 = float(input9)
    input10 = float(input10)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_energia.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'lights': [input1], 'T1': [input2], 'T2': [input3], 'T3': [input4], 'T4': [input5], 'T5': [input6],
                 'T6': [input7], 'T7': [input8], 'T8': [input9], 'T9': [input10]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}

# BlackFriday


@app.post("/model10_blackFriday")
async def model1Predict(input1: str = Form(...), input2: str = Form(...), input3: str = Form(...),
                        input4: str = Form(...), input5: str = Form(...), input6: str = Form(...),
                        input7: str = Form(...)):
    input1 = float(input1)
    input2 = float(input2)
    input3 = float(input3)
    input4 = float(input4)
    input5 = float(input5)
    input6 = float(input6)
    input7 = float(input7)
    r = R(use_pandas=True)
    model_rds_path = "Models\\modelo_blackFriday.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'Gender': [input1], 'Occupation': [input2], 'Stay_In_Current_City_Years': [input3],
                 'Marital_Status': [input4], 'Product_Category_1': [input5], 'Product_Category_2': [input6],
                 'Product_Category_3': [input7]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}
