# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# Enable CORS so the React frontend can communicate with the FastAPI backend
origins = [
    "http://localhost:3000",  # React app running on this port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




# Sample data
vehicle_types = [
    {
        "name": "Economy",
        "baseFare": 10,
        "distanceRate": 5,
        "ratePerHour": 5,
        "minimumFare": 10,
        "convenienceFees": 15,
        "convenienceFeeType": "Percentage",
        "fleetAdminCommission": 5,
        "extraInfo": "Capacity: 3, Type: Taxi"
    },
    {
        "name": "Comfort",
        "baseFare": 12,
        "distanceRate": 8,
        "ratePerHour": 6,
        "minimumFare": 20,
        "convenienceFees": 15,
        "convenienceFeeType": "Percentage",
        "fleetAdminCommission": 10,
        "extraInfo": "Capacity: 4, Type: HatchBack"
    },
    {
        "name": "Exclusive",
        "baseFare": 15,
        "distanceRate": 10,
        "ratePerHour": 8,
        "minimumFare": 30,
        "convenienceFees": 15,
        "convenienceFeeType": "Percentage",
        "fleetAdminCommission": 15,
        "extraInfo": "Capacity: 4, Type: Sedan"
    }
]

bookings = [
    {
        "reference": "BK001",
        "date": "2024-05-01",
        "vehicleType": "Sedan",
        "driver": "John Doe",
        "status": "Confirmed",
        "otp": "1234",
        "cost": "25.00"
    },
    {
        "reference": "BK002",
        "date": "2024-05-02",
        "vehicleType": "SUV",
        "driver": "Jane Smith",
        "status": "Pending",
        "otp": "5678",
        "cost": "35.00"
    },
    {
        "reference": "BK003",
        "date": "2024-05-03",
        "vehicleType": "Hatchback",
        "driver": "Mike Johnson",
        "status": "Cancelled",
        "otp": "9012",
        "cost": "15.00"
    }
]
cars=[
    {
        "createDate": '2024-05-01',
        "driver": 'John Doe',
        "vehicleType": 'Sedan',
        "registrationNumber": 'ABC123',
        "brandName": 'Toyota',
        "modelNumber": 'Camry',
        "otherInfo": 'N/A',
        "image": 'N/A',
        "activeStatus": 'Active',
        "approved": 'Yes'
      },
      {
        "createDate": '2024-05-02',
        "driver": 'Jane Smith',
        "vehicleType": 'SUV',
        "registrationNumber": 'XYZ456',
        "brandName": 'Honda',
        "modelNumber": 'CRV',
        "otherInfo": 'N/A',
        "image": 'N/A',
        "activeStatus": 'Inactive',
        "approved": 'No'
      }
]

@app.get("/vehicle-types")
def get_vehicle_types():
    return vehicle_types

@app.get("/bookings")
def get_bookings():
    return bookings

@app.get("/cars")
def get_cars():
    return cars
