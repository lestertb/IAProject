# Import joblib to load models generate in collab
from joblib import load
# Import apifast to create api rest
from fastapi import Request, FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import sklearn
from array import array
import numpy as np

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

# Simple get


@app.get("/testGet")
async def root():
    return {"message": "Hello World"}

# Get with params (id)


@app.get("/testGet/{id}")
async def root(id: int):
    return {"message": "Hello World", "id": id}


# Post body request
@app.post("/model1")
async def login(input1: str = Form(...), input2: str = Form(...)):
    # Load model
    model = load("Models\modelo_Autos")
    result = model.predict(np.array([[-1.82411162, -0.56392439, -0.8299164, -0.5782049,  0.50018321,
                                      1.35632689,  0.39148015, -0.17450057]]))
    print(result)
    return {"result": "result"}
