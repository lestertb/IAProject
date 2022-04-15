# Import joblib to load models generate in collab
from joblib import load
# Import apifast to create api rest
from fastapi import Request, FastAPI, Form

# Create simple api rest
app = FastAPI()


# Simple get


@app.get("/testGet")
async def root():
    return {"message": "Hello World"}

# Get with params (id)


@app.get("/testGet/{id}")
async def root(id: int):
    return {"message": "Hello World", "id": id}


# Post body request
@app.post("/login/")
async def login(username: str = Form(...), password: str = Form(...)):
    return {"username": username, "password": password}
