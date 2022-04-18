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
    model_rds_path = "autos.rds"
    r.assign("rmodel", model_rds_path)

    dataFrame = {'Selling_Price': [input1],
                 'Kms_Driven': [input2], 'Year': [input3]}
    data = pd.DataFrame(dataFrame)

    r.assign("rdata", data)

    expr = 'model <- readRDS(rmodel); result <- predict(model, rdata)'
    r(expr)
    res = r.get('result')

    return {"result": res}
