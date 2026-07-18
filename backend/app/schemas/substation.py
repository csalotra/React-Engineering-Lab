from pydantic import BaseModel

class SubstationResponse(BaseModel):
    id: int
    name: str
    currentLoadMW: float
    warningThreshold: int
    status: str