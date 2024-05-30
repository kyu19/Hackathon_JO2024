from fastapi import FastAPI
from app.db import get_db_connection
from app.routers import  data

app = FastAPI()

# app.include_router(athletes.router, prefix="/athletes", tags=["Athletes"])
# app.include_router(medals.router, prefix="/medals", tags=["Medals"])
# app.include_router(results.router, prefix="/results", tags=["Results"])
# app.include_router(hosts.router, prefix="/hosts", tags=["Hosts"])
app.include_router(data.router, prefix="/data", tags=["Data"])
#app.include_router(predictions.router, prefix="/predictions", tags=["Predictions"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Olympics API!"}

@app.get("/test-db")
def test_db_connection():
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM olympic_hosts LIMIT 1")
            result = cursor.fetchone()
            conn.close()
            if result:
                return {"message": "Connexion réussie à la base de données", "sample_data": result}
            else:
                return {"message": "Connexion réussie à la base de données, mais aucune donnée n'a été trouvée"}
        except Exception as e:
            return {"message": f"Erreur lors de l'exécution de la requête: {str(e)}"}
    else:
        return {"message": "Échec de la connexion à la base de données"}

@app.get("/predictions")
def get_predictions():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Predictions")
        result = cursor.fetchall()
        conn.close()
        return {"data": result}
    else:
        return {"error": "Failed to connect to the database"}