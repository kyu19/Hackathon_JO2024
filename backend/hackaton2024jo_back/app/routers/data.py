from fastapi import APIRouter
import pandas as pd
from app.db import get_db_connection

router = APIRouter()

def query_to_dataframe(query, connection):
    return pd.read_sql(query, connection)

@router.get("/hosts")
def get_hosts():
    conn = get_db_connection()
    if conn:
        query = "SELECT * FROM olympic_hosts"
        df = query_to_dataframe(query, conn)
        conn.close()
        return df.to_dict(orient='records')
    else:
        return {"error": "Failed to connect to the database"}

@router.get("/medals")
def get_medals():
    conn = get_db_connection()
    if conn:
        query = "SELECT * FROM olympic_medals"
        df = query_to_dataframe(query, conn)
        conn.close()
        return df.to_dict(orient='records')
    else:
        return {"error": "Failed to connect to the database"}

@router.get("/athletes")
def get_athletes():
    conn = get_db_connection()
    if conn:
        query = "SELECT * FROM olympic_athletes"
        df = query_to_dataframe(query, conn)
        conn.close()
        return df.to_dict(orient='records')
    else:
        return {"error": "Failed to connect to the database"}
    
@router.get("/results")
def get_athletes():
    conn = get_db_connection()
    if conn:
        query = "SELECT * FROM olympic_results"
        df = query_to_dataframe(query, conn)
        conn.close()
        return df.to_dict(orient='records')
    else:
        return {"error": "Failed to connect to the database"}

@router.get("/predictions")
def get_predictions():
    conn = get_db_connection()
    if conn:
        query = "SELECT * FROM predictions"
        df = query_to_dataframe(query, conn)
        conn.close()
        return df.to_dict(orient='records')
    else:
        return {"error": "Failed to connect to the database"}