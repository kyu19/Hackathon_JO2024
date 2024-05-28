from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_medals():
    return {"message": "List of medals"}

@router.get("/{medal_id}")
def get_medal(medal_id: int):
    return {"message": f"Details of medal {medal_id}"}