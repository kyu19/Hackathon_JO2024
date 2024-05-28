from fastapi import FastAPI
from app.routers import athletes, medals, results, hosts

app = FastAPI()

app.include_router(athletes.router, prefix="/athletes", tags=["Athletes"])
app.include_router(medals.router, prefix="/medals", tags=["Medals"])
app.include_router(results.router, prefix="/results", tags=["Results"])
app.include_router(hosts.router, prefix="/hosts", tags=["Hosts"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Olympics API!"}
