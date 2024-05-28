from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_hosts():
    return {"message": "List of hosts"}

@router.get("/{host_id}")
def get_host(host_id: int):
    return {"message": f"Details of host {host_id}"}
