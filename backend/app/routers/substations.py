from fastapi import APIRouter
from app.services.substation_service import SubstationService
from app.schemas.substation import SubstationResponse


router = APIRouter(
    prefix="/substations",
    tags=["Substations"]
)

service = SubstationService()

@router.get("/", response_model=list[SubstationResponse])
def get_substations():
  return service.get_substations()


