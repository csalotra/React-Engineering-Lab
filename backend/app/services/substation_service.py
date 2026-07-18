from app.schemas.substation import SubstationResponse
from app.mock_data.substations import SUBSTATIONS

class SubstationService:
  
  def get_substations(self) -> list[SubstationResponse]:
    return [
      SubstationResponse(**substation) for substation in SUBSTATIONS
    ]