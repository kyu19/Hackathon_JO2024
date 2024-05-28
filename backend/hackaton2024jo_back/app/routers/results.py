from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_results():
    return {"message": "List of results"}

@router.get("/{result_id}")
def get_result(result_id: int):
    return {"message": f"Details of result {result_id}"}