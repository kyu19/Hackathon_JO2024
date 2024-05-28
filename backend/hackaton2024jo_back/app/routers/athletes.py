from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_athletes():
    return {"message": "List of athletes"}

@router.get("/{athlete_id}")
def get_athlete(athlete_id: int):
    return {"message": f"Details of athlete {athlete_id}"}
