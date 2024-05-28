from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_root():
    return {"message": "Welcome to the Olympics API!"}

@router.get("/events")
def get_events():
    # Placeholder for fetching events data
    return {"events": "List of events"}

@router.get("/medals")
def get_medals():
    # Placeholder for fetching medals data
    return {"medals": "List of medals"}

@router.get("/athletes")
def get_athletes():
    # Placeholder for fetching athletes data
    return {"athletes": "List of athletes"}
