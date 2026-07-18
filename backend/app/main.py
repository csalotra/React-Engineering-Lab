from fastapi import FastAPI

from app.routers.substations import router as substations_router

app = FastAPI()

app.include_router(substations_router)


